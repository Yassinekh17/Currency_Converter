import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, Button, Linking } from 'react-native';
import axios from 'axios';

const API_KEY = 'f2e0f94560db4fd7987496ea2a9adf56'; // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2/everything';

interface Article {
  publishedAt: string;
  title: string;
  urlToImage: string;
  source: { name: string };
  description: string;
  url: string;
}

const BoxNews: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: 'finance OR stock OR currency OR money', // Filter by finance-related topics
            sortBy: 'publishedAt',
            apiKey: API_KEY,
          },
        });
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }: { item: Article }) => (
    <View style={styles.articleContainer}>
      <Text style={styles.title}>{item.title}</Text>
      {item.urlToImage ? <Image source={{ uri: item.urlToImage }} style={styles.image} /> : null}
      <Text style={styles.source}>Source: {item.source.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.publishedAt}>{new Date(item.publishedAt).toLocaleString()}</Text>
      <Button title="Check" onPress={() => Linking.openURL(item.url)} />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  articleContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginTop: 10,
  },
  source: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
  publishedAt: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default BoxNews;
