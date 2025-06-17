import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PasswordResetScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handlePasswordReset = () => {
    // Dummy implementation
    console.log(`Password reset email sent to ${email}`);

    // Actual implementation (commented out)
    // firebase.auth().sendPasswordResetEmail(email)
    //   .then(() => {
    //     console.log('Password reset email sent');
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Reset Password" onPress={handlePasswordReset} />
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
