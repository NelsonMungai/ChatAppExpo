import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Chat from "./screens/Chat";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerBackVisible: false,
            title: "Active users ",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "900",
            },
          })}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ route }) => ({
            headerBackVisible: true,
            headerLeft: () => (
              <Image
                source={route.params?.avatar}
                style={{
                  width: 40,
                  height: 40,
                  padding: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: "black",
                  marginRight: 5,
                }}
              />
            ),
            title: route.params?.name,
            headerTitleStyle: {
              fontWeight: "bold",
              headerTitleAlign: "center",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
