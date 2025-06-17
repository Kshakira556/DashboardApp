import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListWidget = ({ title, data }) => {
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  widgetContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListWidget;
