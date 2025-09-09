import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./stacks/AuthStack";
import MainTabs from "./tabs/MainTabs";


const Stack = createNativeStackNavigator();


export default function RootNavigator() {
// In a real app you would read auth state and switch stacks
const isLoggedIn = false; // change to true to test MainTabs


return (
<Stack.Navigator screenOptions={{ headerShown: false, headerLargeTitle: false }}>
{isLoggedIn ? (
<Stack.Screen name="Main" component={MainTabs} />
) : (
<Stack.Screen name="Auth" component={AuthStack} />
)}
</Stack.Navigator>
);
}