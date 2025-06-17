// components/CustomWidget.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomWidget = ({ title, data }) => {
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.title}>{title}</Text>
      {/* Add custom rendering logic for your custom widget here */}
      <Text>{data}</Text>
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
});

export default CustomWidget;
