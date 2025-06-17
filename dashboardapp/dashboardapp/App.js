import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import AdminScreen from './screens/AdminScreen';
import FacebookLoginScreen from './screens/FacebookLoginScreen';
import MFAScreen from './screens/MFAScreen';
import ProfileScreen from './screens/ProfileScreen';

const AuthStack = createStackNavigator();
const AppStack = createBottomTabNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="FacebookLogin" component={FacebookLoginScreen} />
      <AuthStack.Screen name="MFA" component={MFAScreen} />
    </AuthStack.Navigator>
  );
}

function AppStackScreen({ logout }) {
  return (
    <AppStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'ios-home';
          } else if (route.name === 'Admin') {
            iconName = 'ios-settings';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <AppStack.Screen name="Dashboard" component={DashboardScreen} />
      <AppStack.Screen
        name="Admin"
        options={{
          tabBarLabel: 'Admin',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" size={size} color={color} />
          ),
        }}
      >
        {props => <AdminScreen {...props} onLogout={logout} />}
      </AppStack.Screen>
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Replace with your authentication logic (e.g., token check)
    setIsLoggedIn(true); // Assuming user is logged in initially
  }, []);

  const logout = () => {
    // Implement logout logic (e.g., clear tokens, reset state)
    setIsLoggedIn(false); // Reset isLoggedIn state
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStackScreen logout={logout} /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
