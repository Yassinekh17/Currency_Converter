import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ConverterButtonProps {
  onPress: () => void;
}

const ConverterButton: React.FC<ConverterButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>⇄</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default ConverterButton;
