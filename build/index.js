"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numArray = new NumberCollection_1.NumberCollection([1000, 1023, -2, 1, 0]);
var string = new CharacterCollection_1.CharacterCollection('xxDdfAbc');
var ll = new LinkedList_1.LinkedList();
string.sort();
ll.add(4);
ll.add(0);
ll.add(-2);
ll.add(1);
ll.sort();
