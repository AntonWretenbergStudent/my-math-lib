export class Dataset {
  constructor(numbers = []) {
    this.numbers = numbers;
  }

  mean() {
    if (this.numbers.length === 0) return 0;
    const sum = this.numbers.reduce((acc, val) => acc + val, 0);
    return sum / this.numbers.length;
  }
}

