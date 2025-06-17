// AdminDashboardScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Widgets from './Widgets'; // Assuming Widgets.js is in './components'
import { dashboardConfig } from '../dashboardConfig'; // Assuming correct path to dashboardConfig
import { useNavigation } from '@react-navigation/native';

const AdminDashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Widgets />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default AdminDashboardScreen;
