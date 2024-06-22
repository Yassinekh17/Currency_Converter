// Example of screen registration
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '@/app/WelcomeScreen';
import TabsScreen from '@/app/(tabs)/_layout'; // Example import, adjust as necessary

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="(tabs)" component={TabsScreen} options={{ headerShown: false }}/>
    
    
  </Stack.Navigator>
);

export default AppNavigator;
