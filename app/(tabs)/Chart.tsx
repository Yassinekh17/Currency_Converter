import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet,View, Image,Text, Platform } from 'react-native';
import BoxNews from '@/components/BoxNews';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import ChartComponent from '@/components/Charts';
export default function ChartScreen() {
    const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      headerImage={
        <Image
          source={require('@/assets/images/goal (1).png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chart</ThemedText>
      </ThemedView>
      <ThemedText>In this part you will find a chart about currencys</ThemedText>
     
      <View style={styles.container}>
      <Text style={styles.title}>Currency Chart</Text>
      <Picker
        selectedValue={selectedCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="TND" value="TND" />
        <Picker.Item label="JPY" value="JPY" />
        <Picker.Item label="GBP" value="GBP" />
        <Picker.Item label="AUD" value="AUD" />
        <Picker.Item label="CAD" value="CAD" />
        <Picker.Item label="CHF" value="CHF" />
        <Picker.Item label="CNY" value="CNY" />
        <Picker.Item label="SEK" value="SEK" />
        <Picker.Item label="NZD" value="NZD" />
      </Picker>
      <ChartComponent currency={selectedCurrency} />
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 200,
    bottom: 30,
    left: 80,
    position: 'absolute',
  },
});
