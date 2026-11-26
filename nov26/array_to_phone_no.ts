export function createPhoneNumber(numbers: number[]): string {
  if (numbers.length !== 10) {
    console.error("Only 10 digits, please");
    return "";
  }
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
