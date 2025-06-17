import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Import Firebase auth

export default function MFAScreen() {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const handleVerifyCode = async () => {
    try {
      // Dummy implementation: Replace with actual Firebase MFA logic
      // In a real-world scenario, this would involve backend verification
      console.log(`Code entered: ${code}`);

      // Simulating successful verification
      await auth().signInAnonymously(); // Replace with actual MFA logic

      // Navigate to Dashboard upon successful verification
      navigation.replace('Dashboard');
    } catch (error) {
      console.error('Error verifying code:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multi-Factor Authentication</Text>
      <TextInput
        placeholder="Enter Code"
        style={styles.input}
        onChangeText={setCode}
        value={code}
      />
      <Button title="Verify Code" onPress={handleVerifyCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
