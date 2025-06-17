import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

const FACEBOOK_APP_ID = 'YOUR_FACEBOOK_APP_ID'; // Replace with your Facebook App ID

export default function FacebookLoginScreen() {
  const navigation = useNavigation();

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: FACEBOOK_APP_ID,
    redirectUri: Facebook.makeRedirectUri({
      useProxy: true,
    }),
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // Handle successful authentication here
      // For now, we'll just navigate to the Dashboard
      navigation.replace('Dashboard');
    }
  }, [response, navigation]);

  return (
    <View style={styles.container}>
      <Text>Facebook Login</Text>
      <Button
        disabled={!request}
        title="Login with Facebook"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
