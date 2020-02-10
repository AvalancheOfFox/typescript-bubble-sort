class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    //destructuring length from this.collection.length
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftSwapNum = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftSwapNum;
        }
      }
    }
    console.log(this.collection);
  }
}

const sorter1 = new Sorter([10, 3, -2, 1, 0]);
console.log(sorter1.sort());
