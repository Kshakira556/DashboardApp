// components/WorkflowWidget.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkflowWidget = ({ title, data }) => {
  return (
    <View style={styles.widgetContainer}>
      <Text style={styles.title}>{title}</Text>
      {data.map((step, index) => (
        <View key={index} style={styles.workflowItem}>
          <Text>{step}</Text>
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
  workflowItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default WorkflowWidget;
