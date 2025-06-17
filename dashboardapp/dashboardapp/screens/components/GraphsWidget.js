// components/GraphsWidget.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Import any charting library if you are using one, e.g., 'react-native-chart-kit'

const GraphsWidget = ({ title, data }) => {
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.title}>{title}</Text>
      {/* Replace the following View with the actual chart component */}
      <View style={styles.graphContainer}>
        <Text>Graph data will be displayed here.</Text>
      </View>
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
  graphContainer: {
    height: 200,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GraphsWidget;
