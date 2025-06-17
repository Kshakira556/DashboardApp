// components/StatsWidget.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsWidget = ({ title, data }) => {
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.statItem}>
          <Text>{item.label}: {item.value}</Text>
        </View>
      ))}
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
  statItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default StatsWidget;
