function currencyFormatter(num: number, lang = 'ru-RU'): string {
  {
    return new Intl.NumberFormat(lang, {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(num);
  }
}
export default currencyFormatter;
