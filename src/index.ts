import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
const numArray = new NumberCollection([1000, 1023, -2, 1, 0]);
const sorter1 = new Sorter(numArray);

sorter1.sort();
console.log(numArray.data);
