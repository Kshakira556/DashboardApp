import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (data) => {
    // Implement login logic here (e.g., API call)
    console.log(data);
    navigation.replace('Dashboard');
  };

  const onSubmit = () => {
    handleLogin({ email, password });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <Button title="Login" onPress={onSubmit} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Login with Google" onPress={() => navigation.navigate('GoogleLogin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
