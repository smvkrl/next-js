const currencyFormatter = (num: number, lang = 'ru-RU') => (
  <>
    {new Intl.NumberFormat(lang, {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(num)}
  </>
);
export default currencyFormatter;
