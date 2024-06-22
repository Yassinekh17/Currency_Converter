import { useState, useEffect } from 'react';

interface ExchangeRate {
  code: string;
  rate: number;
}

const useExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/d8a3b44caa65f21c4fc8b920/latest/USD');
        const data = await response.json();
        const rates = Object.entries(data.conversion_rates).map(([code, rate]) => ({
          code,
          rate: rate as number,
        }));
        setExchangeRates(rates);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  return { exchangeRates, loading, error };
};

export default useExchangeRates;
