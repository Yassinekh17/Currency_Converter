import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, withTheme, Text } from '@rneui/themed';

interface ButtonsComponentProps {
  buttonText: string;
  onPress: () => void;
}

const Buttons: FunctionComponent<ButtonsComponentProps> = ({ buttonText , onPress }) => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        title={buttonText}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
});

export default withTheme(Buttons, '');
