"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
//sort array of numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([54, 69, 21, 2, 3, -5, 0, 1]);
//sort a random string
var charactersCollection = new CharactersCollection_1.CharactersCollection("asdcefgegxaxAAXXXdwfwefgwe");
//sort a linked list
var linkedList = new LinkedList_1.LinkedList();
var sort = new Sorter_1.Sorter(charactersCollection);
sort.sort();
console.log(sort.collection);
