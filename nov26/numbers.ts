/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.
*/

export class Challenge {
  static solution(num: number) {
    const count: number[] = [];
    if (num <= 0) {
      return 0;
    }
    for (let index = 1; index < num; index++) {
      if (index % 3 === 0) {
        count.push(index);
      } else if (index % 5 === 0) {
        count.push(index);
      }
    }
    let output = 0;
    for (let index = 0; index < count.length; index++) {
      output += count[index];
    }
    return output;
  }
}
