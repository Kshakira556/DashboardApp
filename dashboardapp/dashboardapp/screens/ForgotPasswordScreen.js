import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Placeholder for API call to send reset password email
    console.log(`Request to reset password for ${email}`);
    // Uncomment and replace with actual API call once available
    // fetch('https://your-api-server.com/api/reset-password', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error resetting password:', error));
  };

  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ForgotPasswordScreen;
