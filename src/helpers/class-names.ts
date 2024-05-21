type ClassNameRecord = [string, boolean?] | string | undefined;

export function cn(arr: ClassNameRecord[]): string {
  return arr
    .map((record) => {
      if (!record) {
        return;
      }
      if (record instanceof Array && record[1]) {
        return record[0];
      }
      if (typeof record === 'string') {
        return record;
      }
      return;
    })
    .join(' ')
    .trim()
    .replaceAll(/\s+/g, ' ');
}
