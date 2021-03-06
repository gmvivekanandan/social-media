import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Foundation";
import SignUpScreen from "./app/screens/SignUpScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ProfileSetupScreen from "./app/screens/ProfileSetupScreen";
import HomeScreen from "./app/screens/HomeScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import { COLORS } from "./app/config/colors";
import SearchScreen from "./app/screens/SearchScreen";
import { firebase } from "./app/config/FireBaseConfig";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const [oldUser, setOldUser] = useState(false);
  const [loading, setLoading] = useState(false);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setOldUser(true);
      setLoading(true);
    } else {
      setOldUser(false);
    }
  });

  if (!loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <NavigationContainer>
        {oldUser ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "home") {
                  iconName = focused ? "home" : "home";
                } else if (route.name === "profile") {
                  iconName = focused ? "torso" : "torso";
                } else if (route.name === "search") {
                  iconName = focused ? "magnifying-glass" : "magnifying-glass";
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: COLORS.primaryColor,
              inactiveTintColor: "gray",
              showLabel: false,
            }}
          >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="search" component={SearchScreen} />
            <Tab.Screen name="profile" component={ProfileScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen
              name="signup"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profilesetup"
              component={ProfileSetupScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ApplicationProvider>
  );
}
