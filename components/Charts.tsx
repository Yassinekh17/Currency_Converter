// ChartComponent.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

interface ChartComponentProps {
  currency: string;
}

interface ExchangeRateResponse {
  rates: { [key: string]: number };
}

const ChartComponent: React.FC<ChartComponentProps> = ({ currency }) => {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ExchangeRateResponse>(`https://api.exchangerate-api.com/v4/latest/${currency}`);
        const rates = response.data.rates;
        const labels = Object.keys(rates);
        const data = Object.values(rates) as number[];
        const limitedLabels = labels.slice(-6);
        const limitedData = data.slice(-6);
        setChartData({
          labels:limitedLabels,
          datasets: [
            {
              data:limitedData,
            },
          ],
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchChartData();
  }, [currency]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        formatYLabel={(y) => parseFloat(y).toFixed(2)}
        chartConfig={{
          backgroundColor: '#324aa8',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        withInnerLines={false}
        withOuterLines={false}
        segments={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: 'center',
  },
});

export default ChartComponent;
