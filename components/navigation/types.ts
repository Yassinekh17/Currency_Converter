// app/navigation/types.ts
import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  '(tabs)': undefined;
  
  
};

export type TabsParamList = {
  Home: undefined;
  Explore: undefined;
  Chart: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
