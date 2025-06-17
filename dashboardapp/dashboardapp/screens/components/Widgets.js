import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListWidget from './ListWidget';
import StatsWidget from './StatsWidget';
import WorkflowWidget from './WorkflowWidget';
import GraphsWidget from './GraphsWidget';
import ActivityFeedWidget from './ActivityFeedWidget';
import CustomWidget from './CustomWidget'; // Import your custom widget component if needed
import { dashboardConfig } from '../dashboardConfig'; // Assuming you have dashboard configuration

const Widgets = () => {
  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {dashboardConfig.widgets.map((widget) => {
          switch (widget.type) {
            case 'list':
              return <ListWidget key={widget.id} title={widget.title} data={widget.data} />;
            case 'stats':
              return <StatsWidget key={widget.id} title={widget.title} data={widget.data} />;
            case 'workflow':
              return <WorkflowWidget key={widget.id} title={widget.title} data={widget.data} />;
            case 'graphs':
              return <GraphsWidget key={widget.id} title={widget.title} data={widget.data} />;
            case 'activityFeed':
              return <ActivityFeedWidget key={widget.id} title={widget.title} data={widget.data} />;
            case 'custom':
              return <CustomWidget key={widget.id} title={widget.title} data={widget.data} />;
            default:
              return null; // Handle unknown widget types if necessary
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
});

export default Widgets;
