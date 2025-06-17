import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Widgets from './components/Widgets';

export default function DashboardScreen() {
  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Widgets />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
});
