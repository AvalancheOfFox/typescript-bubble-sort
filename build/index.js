"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollection_1 = require("./NumberCollection");
var numArray = new NumberCollection_1.NumberCollection([1000, 1023, -2, 1, 0]);
var sorter1 = new Sorter_1.Sorter(numArray);
sorter1.sort();
console.log(numArray.data);
