// app/welcome.tsx
import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';
import Buttons from '@/components/Button'; // Ensure the path is correct

import { RootStackParamList } from '@/components/navigation/types'; // Adjust the path as necessary

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('(tabs)'); // Pass params with the required structure
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      headerImage={
        <Image
          source={require('@/assets/images/CurrencyverseLogo-Original-5000x50002.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to  CurrencyVerse !</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        <ThemedText>
           <ThemedText type="defaultSemiBold">CurrencyVerse </ThemedText>
           is your ultimate financial companion, offering seamless currency conversion between global currencies, real-time financial news updates, and interactive currency charts. Stay informed and empowered with CurrencyVerse wherever you go.
        </ThemedText>
      </ThemedView>
     
      <ThemedView style={styles.stepContainer}>
        <Buttons buttonText="Let's start" onPress={handlePress} />
      </ThemedView>
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
  reactLogo: {
    height: 150,
    width: 220,
    bottom: 20,
    left: 70,
    position: 'absolute',
  },
});
