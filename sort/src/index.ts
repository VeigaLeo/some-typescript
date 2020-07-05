import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//sort array of numbers
const numbersCollection = new NumbersCollection([54, 69, 21, 2, 3, -5, 0, 1]);

//sort a random string
const charactersCollection = new CharactersCollection(
  "asdcefgegxaxAAXXXdwfwefgwe"
);

//sort a linked list
const linkedList = new LinkedList();

const sort = new Sorter(charactersCollection);

sort.sort();
console.log(sort.collection);
