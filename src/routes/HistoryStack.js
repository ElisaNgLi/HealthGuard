import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../screens/HistoryScreen";
import colors from "../config/colors";
import AddHistoryScreen from "../screens/AddHistoryScreen";

const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.lightBlue,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ title: "History" }}
      />
      <Stack.Screen
        name="AddHistoryScreen"
        component={AddHistoryScreen}
        options={{ title: "Add History" }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
