// 測試資料
// 文化部　文化資料開放服務網　博物館資料
// https://opendata.culture.tw/frontsite/openData/detail?datasetId=290

const layers = L.layerGroup();

const ShowMultiPoint = (dataList = [], layers) => {
    if (dataList.length > 0) {
        dataList.forEach((item) => {
            const marker = L.marker([item.y, item.x]).bindPopup(item.content);
            layers.addLayer(marker);
        });
    }
};

// 取得檔案副檔名
const getFileExtension = (filename) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
};

const Readxlsx = {
    to_json: (data) => {
        const workbook = XLSX.read(data, { type: "binary" });
        let result = {};
        console.log("workbook", workbook);
        workbook.SheetNames.forEach((sheetName) => {
            const roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if (roa.length > 0) {
                result[sheetName] = roa;
            }
        });
        return result;
    },
    to_csv: (data) => {
        const workbook = XLSX.read(data, { type: "binary" });
        const result = [];
        workbook.SheetNames.forEach((sheetName) => {
            const csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
            if (csv.length > 0) {
                result.push("SHEET: " + sheetName);
                result.push("\n");
                result.push(csv);
            }
        });
        return result;
    },
};

const upload = document.getElementById("upload");

const loadExcel = (e) => {
    return new Promise((resolve, reject) => {
        const file = e.target.files[0]; // 取得上傳第一個檔案
        const reader = new FileReader(); // 使用FileReader讀檔
        const name = file.name; // 檔案名稱
        const fileExtension = getFileExtension(name);

        if (["xlsx", "xls", "ods", "csv"].indexOf(fileExtension) === -1) {
            console.log("檔案類型不支援");
            return;
        }

        // onload觸發事件
        reader.onload = (e) => {
            const data = e.target.result;
            const data_json = Readxlsx.to_json(data);
            console.log(data_json);
            resolve(data_json);
        };

        reader.readAsBinaryString(file);
    });
};

upload.addEventListener("change", (e) => {
    loadExcel(e)
        .then((data) => {
            return data["博物館"].map((item) => {
                return {
                    x: item["經度"],
                    y: item["緯度"],
                    content: `名稱: ${item["名稱"]}, 地址: ${item["地址"]}`,
                };
            });
        })
        .then((data) => {
            ShowMultiPoint(data, layers);
            layers.addTo(lMap);
        });
});
