import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
const numArray = new NumberCollection([1000, 1023, -2, 1, 0]);
const sorter1 = new Sorter(numArray);
const string = new CharacterCollection('xxDdfAbc');
const sorter2 = new Sorter(string);
sorter1.sort();
sorter2.sort();
