import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import currencies from '@/data/currencies';

interface DropdownItem {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  items: DropdownItem[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ items, selectedValue, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const getFlagEmoji = (code: string) => {
    const currency = currencies.find((currency) => currency.code === code);
    return currency ? currency.flag : '';
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dropdownButton}>
        <Text style={styles.flag}>{getFlagEmoji(selectedValue)}</Text>
        <Text style={styles.dropdownText}>{selectedValue}</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownRow}
                  onPress={() => {
                    onSelect(item.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.flag}>{getFlagEmoji(item.value)}</Text>
                  <Text style={styles.dropdownRowText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
  },
  dropdownText: {
    fontSize: 16,
    marginLeft: 5,
  },
  flag: {
    fontSize: 24,
    marginRight: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  dropdownRowText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomDropdown;
