import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomDropdown from '@/components/CustomDropdown';
import currencies from '@/data/currencies';

interface BoxProps {
  amount: string;
  currency: string;
  onAmountChange: (text: string) => void;
  onCurrencyChange: (currency: string) => void;
  exchangeRates: { code: string; rate: number }[];
}

const Box: React.FC<BoxProps> = ({ amount, currency, onAmountChange, onCurrencyChange, exchangeRates }) => {
  const items = exchangeRates.map((rate) => ({
    label: `${rate.code} ${currencies.find((c) => c.code === rate.code)?.flag}`,
    value: rate.code,
  }));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={onAmountChange}
        keyboardType="numeric"
      />
      <CustomDropdown
        items={items}
        selectedValue={currency}
        onSelect={onCurrencyChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Box;
