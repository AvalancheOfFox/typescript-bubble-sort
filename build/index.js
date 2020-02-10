"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        //destructuring length from this.collection.length
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftSwapNum = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftSwapNum;
                }
            }
        }
        console.log(this.collection);
    };
    return Sorter;
}());
var sorter1 = new Sorter([10, 3, -2, 1, 0]);
console.log(sorter1.sort());
