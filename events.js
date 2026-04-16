// Fixed event schedule (all times are server time, UTC+3)
// days: 0 = Sunday, 1 = Monday ... 6 = Saturday (JS Date convention)
const EVENTS = [
    { id: 1,  name: "Selket & Neith",           times: ["06:30", "12:30", "18:30"],                              days: [1, 2, 3, 4, 5, 6] },
    { id: 2,  name: "Isis & Anubis",            times: ["07:30", "14:30", "20:30"],                              days: [1, 2, 3, 4, 5, 6] },
    { id: 3,  name: "Haroesis & Seth",          times: ["18:30"],                                                days: [0] },
    { id: 4,  name: "Beakyung The White Viper", times: ["21:30"],                                                days: [5] },
    { id: 5,  name: "The Roc",                  times: ["21:30"],                                                days: [6] },
    { id: 6,  name: "Capture The Flag",         times: ["01:00", "05:00", "09:00", "13:00", "17:00", "21:00"],   days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 7,  name: "Battle Arena (Score)",     times: ["04:00", "08:00", "16:00"],                              days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 8,  name: "Battle Arena (Flag)",      times: ["12:00", "20:00"],                                       days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 9,  name: "Survival Arena",           times: ["11:00", "23:00"],                                       days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 10, name: "Special Goods Time",       times: ["03:30", "09:30", "15:30", "21:30"],                     days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 11, name: "Last Man Standing",        times: ["11:30", "23:30"],                                       days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 12, name: "War of Leagues",           times: ["19:30"],                                                days: [0, 1, 2, 3, 4, 5, 6] },
    { id: 13, name: "Tower Defense",            times: ["17:30"],                                                days: [0, 5, 6] },
    { id: 14, name: "Guild Wars",               times: ["20:30"],                                                days: [0] },
    { id: 15, name: "Fortress War",             times: ["21:30"],                                                days: [0] },
];
