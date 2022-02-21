const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

const CreatePoint = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let x = random(120.5, 121.4);
        let y = random(23, 24.6);
        let value = Math.floor(random(0, 100));

        arr.push({ x, y, value });
    }

    return arr;
};

var randomPoint = CreatePoint(300);
