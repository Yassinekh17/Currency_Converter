const getFlagUrl = (currencyCode: string) => {
  const countryCode = getCountryCodeFromCurrency(currencyCode);
  return `https://countryflagsapi.com/png/${countryCode.toLowerCase()}`;
};

const getCountryCodeFromCurrency = (currencyCode: string) => {
  // Implement the mapping from currency code to country code
  const mapping: { [key: string]: string } = {
    USD: 'US',
    EUR: 'EU',
    TND: 'TN',
    ILS: 'IL',
    // Add more mappings as needed
  };
  return mapping[currencyCode] || 'US'; // Default to US if not found
};

export { getFlagUrl, getCountryCodeFromCurrency };
