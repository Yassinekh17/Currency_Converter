import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home';
import ExploreScreen from './Explore';
import ChartScreen from './Chart';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const tabBarOptions = {
  activeTintColor: '#007AFF', // Adjust the active color if needed
  inactiveTintColor: 'gray', // Adjust the inactive color if needed
};
export default function Tabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Convert" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="repeat" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="News" component={ExploreScreen}options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="newspaper-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Chart" component={ChartScreen}options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="stats-chart-outline" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}
