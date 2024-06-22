import { Image, StyleSheet, Platform } from 'react-native';
import React, { useState,useEffect  } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Box from '@/components/Box';
import ConverterButton from '@/components/ConverterButton';
import useExchangeRates from '@/hooks/useExchangeRates';
import {getFlagUrl} from '@/functions/getFlagUrl';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@/app/_layout';

export default function HomeScreen() {
  const [amount, setAmount] = useState('126.56');
  const [currencyFrom, setCurrencyFrom] = useState('TND');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const { exchangeRates, loading, error } = useExchangeRates();
  const [convertedAmount, setConvertedAmount] = useState('0');

  useEffect(() => {
    if (!loading && exchangeRates.length > 0) {
      const rate = getConversionRate(currencyFrom, currencyTo);
      setConvertedAmount((parseFloat(amount) * rate).toFixed(2));
    }
  }, [amount, currencyFrom, currencyTo, loading, exchangeRates]);

  const getConversionRate = (from: string, to: string): number => {
    const fromRate = exchangeRates.find((rate) => rate.code === from)?.rate || 1;
    const toRate = exchangeRates.find((rate) => rate.code === to)?.rate || 1;
    return toRate / fromRate;
  };

  const handleAmountChange = (text: string) => setAmount(text);

  const handleConvertPress = () => {
    const newCurrencyFrom = currencyTo;
    const newCurrencyTo = currencyFrom;
    const rate = getConversionRate(newCurrencyFrom, newCurrencyTo);
    const newAmount = (parseFloat(convertedAmount) * rate).toFixed(2);

    setCurrencyFrom(newCurrencyFrom);
    setCurrencyTo(newCurrencyTo);
    setAmount(newAmount);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      headerImage={
        <Image
          source={require('@/assets/images/exchange.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Currency convertion</ThemedText>
      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Start converting :</ThemedText>
        <ThemedText>
          Insert the amount you want in the box and select the currency you want
          <ThemedText type="defaultSemiBold">
          
          </ThemedText>{' '}
         
        </ThemedText>
      </ThemedView>
      <View style={styles.container}>
      <Text style={styles.label}>You send</Text>
      <Box
        amount={amount}
        currency={currencyFrom}
        onAmountChange={handleAmountChange}
        onCurrencyChange={(currency) => setCurrencyFrom(currency)}
        exchangeRates={exchangeRates}
      />
      <ConverterButton onPress={handleConvertPress} />
      <Text style={styles.label}>They get</Text>
      <Box
        amount={convertedAmount}
        currency={currencyTo}
        onAmountChange={() => {}}
        onCurrencyChange={(currency) => setCurrencyTo(currency)}
        exchangeRates={exchangeRates}
      />
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  reactLogo: {
    height: 178,
    width: 185,
    bottom: 30,
    left: 80,
    position: 'absolute',
  },
});
