import { NumberCollection } from './NumberCollection';

export class Sorter {
  constructor(public collection: NumberCollection) {}

  sort(): void {
    //destructuring length from this.collection.length
    //this is all generic
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
    console.log(this.collection);
  }
}
