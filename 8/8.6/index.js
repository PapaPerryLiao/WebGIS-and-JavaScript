const heatmapInstance = h337.create({
    container: document.querySelector("#heatmap"), //存放heatmap的div
});

// 客製化熱區圖樣式
const heatmapInstance = h337.create({
    container: document.querySelector(".heatmap"),
    backgroundColor: "rgba(0,0,0,.75)",
    //radius: 30,
    gradient: {
        // enter n keys between 0 and 1 here
        ".5": "blue",
        ".8": "red",
        ".95": "yellow",
    },
    maxOpacity: 0.9,
    minOpacity: 0.3,
});

const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

const CreatePoint = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let x = Math.floor(random(0, window.innerWidth));
        let y = Math.floor(random(0, window.innerHeight));
        let value = Math.floor(random(0, 100));

        arr.push({ x, y, value });
    }

    return arr;
};

var randomPoint = CreatePoint(300);
// 熱區繪製的資料格式
const data = {
    max: 100,
    data: randomPoint,
};
console.log(data);

heatmapInstance.setData(data);
