import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';

export default function AdminScreen({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace Firebase logic with dummy data or API calls as needed
    const dummyUsers = [
      { id: '1', email: 'user1@example.com' },
      { id: '2', email: 'user2@example.com' },
    ];
    setUsers(dummyUsers);
    setLoading(false);
  }, []);

  const handleSignOut = () => {
    // Implement sign out logic here
    onLogout(); // Call the onLogout function passed from props
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Admin Panel</Text>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text>{item.email}</Text>
              {/* Add more user details or actions here */}
            </View>
          )}
        />
        <Button title="Sign Out" onPress={handleSignOut} />
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
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
