const mock = {
    dates: [],
    time: [],
};

let date = 17120;
let time = 18;

for (let i=0; i < 20; i+=1) {
    mock.dates.push(date)
    mock.time.push(time)
    date+=1
    time+=1
}

export default mock