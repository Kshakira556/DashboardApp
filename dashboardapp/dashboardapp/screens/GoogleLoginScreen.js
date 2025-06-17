// screens/GoogleLoginScreen.js
import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginScreen() {
  const navigation = useNavigation();

  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    webClientId: 'YOUR_WEB_CLIENT_ID',
    redirectUri: makeRedirectUri({
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
      <Text>Google Login</Text>
      <Button
        disabled={!request}
        title="Login with Google"
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
    padding: 16,
  },
});
