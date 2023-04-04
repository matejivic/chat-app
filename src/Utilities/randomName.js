export default function randomName() {
    const firstNames = [
        "Alex",
        "Avery",
        "Bailey",
        "Cameron",
        "Casey",
        "Dakota",
        "Devin",
        "Drew",
        "Ellis",
        "Emerson",
        "Harper",
        "Hayden",
        "Jesse",
        "Jordan",
        "Kai",
        "Lane",
        "Morgan",
        "Parker",
        "Quinn",
        "Reese",
        "Riley",
        "Rowan",
        "Sage",
        "Sam",
        "Sawyer",
        "Taylor",
        "Terry",
        "Tristan",
        "Tyler",
        "Zion"
    ];
    const lastNames = [
        "Li",
        "Wang",
        "Zhang",
        "Liu",
        "Chen",
        "Yang",
        "Zhao",
        "Huang",
        "Zhou",
        "Wu",
        "Xu",
        "Sun",
        "Hu",
        "Zhu",
        "Gao",
        "Lin",
        "He",
        "Guo",
        "Ma",
        "Luo",
        "Liang",
        "Song",
        "Zheng",
        "Xie",
        "Han",
        "Tang",
        "Feng",
        "Yu",
        "Dong",
        "Xiao"
    ];


    return (`${firstNames[Math.floor(Math.random() * 29)]} ${lastNames[Math.floor(Math.random() * 29)]}`);
}