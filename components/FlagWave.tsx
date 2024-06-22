import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import { getFlagUrl } from '@/functions/getFlagUrl';

interface FlagWaveProps {
  countryCode: string;
}

const FlagWave: React.FC<FlagWaveProps> = ({ countryCode }) => {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4, // Run the animation 4 times
    true // Autoreverse
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Image source={{ uri: getFlagUrl(countryCode) }} style={styles.flag} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: 32,
    height: 24,
  },
});

export default FlagWave;
