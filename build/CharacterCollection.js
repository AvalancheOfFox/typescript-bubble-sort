"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterCollection = /** @class */ (function () {
    function CharacterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharacterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var charArray = this.data.split('');
        var leftChar = charArray[leftIndex];
        charArray[leftIndex] = charArray[rightIndex];
        charArray[rightIndex] = leftChar;
        this.data = charArray.join('');
    };
    return CharacterCollection;
}());
exports.CharacterCollection = CharacterCollection;
