export class Kata {
  static validatePin(pin: string): boolean {
    if (pin.length === 4 || pin.length === 6) {
      if (isNaN(Number(pin))) {
        return false;
      } else {
        if (
          pin.includes(".") ||
          pin.includes("+") ||
          pin.includes("-") ||
          pin.includes(" ") ||
          pin.includes("\n")
        ) {
          return false;
        }
        return true;
      }
    }
    console.log("false");
    return false;
  }
}
