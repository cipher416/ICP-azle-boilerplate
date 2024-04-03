import { ic } from "azle";

export function getCurrentDate() {
  /**
   * Retrieves the current date based on the timestamp obtained from ic.time().
   * @returns {Date} The current date.
   */
  const timestamp = new Number(ic.time());
  return new Date(timestamp.valueOf() / 1000_000);
}
