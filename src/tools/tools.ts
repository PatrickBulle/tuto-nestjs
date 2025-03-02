export class Tools {
  private constructor() {}

  static dateToStringIso8601(date: Date): string {
    return date == null
      ? ''
      : date.getFullYear() +
          '-' +
          (date.getMonth() + 1).toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
          }) +
          '-' +
          date.getDate().toLocaleString('fr-FR', {
            minimumIntegerDigits: 2,
          });
  }
}
