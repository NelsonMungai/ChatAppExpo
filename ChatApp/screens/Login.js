import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-web";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebase/firebaseconfig";

export default function Login({ navigation }) {
  // keep track of use typin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async () => {
    signInWithEmailAndPassword(authentication, email, password).then(() =>
      console.log("user LoggedIn")
    );
  };

  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
        // console.log("No user")
      }
    });
  }, []);
  return (
    <View className="flex-1 ">
      <Input
        placeholder="Enter Your Email"
        label="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        leftIcon={{ type: "material", name: "email" }}
      />
      <Input
        placeholder="Enter Your Password"
        label="password"
        value={password}
        onChangeText={(passwd) => setPassword(passwd)}
        leftIcon={{ type: "material", name: "lock" }}
        secureTextEntry
      />
      <Button title="Login" onPress={LoginUser} />
      <Button
        title="SignUp"
        className="mt-5"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
