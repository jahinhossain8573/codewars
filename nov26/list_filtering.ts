export function filter_list(l: Array<any>): Array<number> {
  const finalArray = l.filter((e) => typeof e === "number");
  console.log(finalArray);
  return finalArray;
}

filter_list([1, 2, "aasf", "1", "123", 123]);
