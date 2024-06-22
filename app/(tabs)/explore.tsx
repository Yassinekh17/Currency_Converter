import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet,View, Image, Platform } from 'react-native';
import BoxNews from '@/components/BoxNews';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      headerImage={
        <Image
          source={require('@/assets/images/news-report.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">News</ThemedText>
      </ThemedView>
      <ThemedText>In this part you will find news about diffrent topics like finance , currencies , stocks...</ThemedText>
     
      <View style={styles.container}>
      <BoxNews />
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
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  reactLogo: {
    height: 178,
    width: 200,
    bottom: 30,
    left: 80,
    position: 'absolute',
  },
});
