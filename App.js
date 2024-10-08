import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";

const Stack = createNativeStackNavigator();
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "list modules" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "add modules" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "view modules" }}
        ></Stack.Screen>
        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "modify modules" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
