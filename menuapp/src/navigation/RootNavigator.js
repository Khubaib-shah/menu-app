import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import MenuScreen from "../screens/MenuScreen";
import LocationScreen from "../screens/LocationScreen";
// Workaround for bundler edge cases on some Windows setups
const ReviewsScreen = require("../screens/ReviewsScreen").default;

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
return (
<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
<Stack.Screen name="Splash" component={SplashScreen} />
<Stack.Screen name="Onboarding" component={OnboardingScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Signup" component={SignupScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
<Stack.Screen name="Search" component={SearchScreen} />
<Stack.Screen name="Menu" component={MenuScreen} />
<Stack.Screen name="Location" component={LocationScreen} />
<Stack.Screen name="Reviews" component={ReviewsScreen} />
</Stack.Navigator>
);
}