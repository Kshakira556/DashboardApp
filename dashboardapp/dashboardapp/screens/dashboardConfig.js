export const dashboardConfig = {
  widgets: [
    {
      id: '1',
      type: 'list',
      title: 'Task List',
      data: ['Task 1', 'Task 2', 'Task 3'],
    },
    {
      id: '2',
      type: 'stats',
      title: 'Employee Stats',
      data: [
        { label: 'John Doe', value: '5 Tasks' },
        { label: 'Jane Doe', value: '3 Tasks' },
      ],
    },
    {
      id: '3',
      type: 'workflow',
      title: 'Current Workflow',
      data: ['Step 1', 'Step 2', 'Step 3'],
    },
    {
      id: '4',
      type: 'graphs',
      title: 'Sales Graph',
      data: [], // Placeholder for graph data
    },
    {
      id: '5',
      type: 'activityFeed',
      title: 'Recent Activities',
      data: ['Logged in', 'Completed Task 1', 'Logged out'],
    },
    {
      id: '6',
      type: 'custom',
      title: 'Custom Widget',
      data: 'Custom data here',
    },
  ],
};
