import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-web";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication, db } from "../firebase/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  // keep track of use typin
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredentials) => {
        const userUID = userCredentials.user.uid;
        const docRef = doc(db, "users", userUID);
        // post user details to the backend
        const docSnap = setDoc(docRef, {
          avatarURL: avatar
            ? avatar
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACUCAMAAADvY+hPAAAAOVBMVEX///+ZmZmWlpbb29uSkpLCwsKPj4/6+vq0tLSgoKCqqqrJycnMzMympqbV1dXy8vLj4+Ps7Oy7u7tXifa0AAAGIklEQVR4nO1c2ZKkIBAcDkU8QP3/j13tnp72AhIo7d4I82FjY2KnzMWkqEt+fm7cuHHjxo0bNyYopT5NAYKyQ2+KsdZcPsF1XTWmH+yX8h9EO9ZsJjqB/WL66/QT1o2tGD5NcIu+qTom31w3mP8XXdX0n6b5hm07vlxcJ2/etfbTZGdYUZcyQPfNW5a1sPMG/SDjoa1hwi/adftJaduiCyniUCRd8SmJqCaoYSdrVnxCHcqwMonwE5KJy1n3VeIav9e6utj1FTqP8YM1Ky5kPNT5jB+su6s8yKRkGsrzUptrKBeRHtlLWl7hQGxFx/jBujrdV/cEm29DWp/sP3oyKS9Is1NJC/JVfpIW51GmF8bppEXm0echzU8i3Z/FeCYtT9H0cJIwfkmfcSTaqPOaA8nW5jdqcj+tKonzZbqr66rutGY4cVlRn4gNGixzXo9meD5eDWasYdYlcZgnUMqyNut3bA2cMZak+9CC+2+K0/YvGI4DuSaUtAKTEu6QpALjKkpJG/DlugVZYAY4WTgNKoO3HhstZoJMHZibk43XCOZ4eEVDuYeeJkNPwzRN4zsUdADyLvRWbQfZqSm2oUGWhwHRpMB2MsE2xOIMl5dbAvN4FHEH6OcQGfaQpXx/h6mZ1ZAxTNFdrqJ7yM9xv597ocGcZq7rwJa5xDRoMR/d5VHGnsI4aA7bG2VeylJgRy66Mthbk1mBtOqgheEjaG/EdkfWLhQQZXxhCjBBy6kcYNJg0hfRLdFinHmGONBcOxDSvYE5u6yzEK3CwOsCvjfG0100+CrxqBetXcNi2wFN4yaAFlFz6RGpgovNJfYIBXcUeSrnAX4EmF3AVZL0dAWVMyzoCrXHylRB4yU6xpAQYcAbG8m5bEzxFvF2qKeboRM5RzyC6/BCRxWw0UhxAxshDSbH0E5XY0w9OjEexVKUP9KhNE7EmUtzHGiV7gnO/SsTsQEf5tIy2SZy0MjbEcEqMgtraNi1RpT+mL8J3EdSxtOINaKb8Vy7YnUR3XJOdNDxAwScHQ502Sa+GXoZ51nU+71jUhqL13GefkPKYvgbU1RqaGTSeNiF6zxD8m5sjeiFMEXHo7zyxzjPvnoe0X3+mWrias4EuHIPOnAV5+gz5TEKPxZbjFU9yfqaMyUm3GW85FXrGNyfx/zbikXRTizLRMQbXHYm8J2BsqaLYJ0Yb4A9m9krg+OqQwWf4TKtZDeArlVWuP0ersqkxfwK6yTwg1ECj1GDORGZWOBAbMeXAwdsCiWNMlKV5wkjqgpwSBxrhO0RrnAn1gLDxZ7k9kSwVJVcvmxD8ihTK/2hYoF3YCNEOrAaqUVz5U/icjoIgUM2owvkFXTe8JC/tp3RbfOWUXhe/996Oac3rgZPezBYNwrBuKMPpPrngqfEhgxsBIy71cGDxT8PWucyEwzh99rJOd0hzeVX5zJnU/YkQhnS8JjNaOC94Ww/5i2Io56bHA6s4Qhokg/BXxwvRK7VX5jD4ICnxnQvHHeowX5gCMf9Qrh77jR7uBJEE5KO7ZK9IEeZbPZ58oI5eIuJ2esSw0GgROI1Zhx4jpwz8A8HERiF2QcO/H9K5rOD3dml+3zu4MM+mgnoXSaUFQ6ssA9o0ic31tjW6bOC/TV2wkvtGW+xzQuzHegbW69EdFj97PIVAm/0woZz3jTgCra7hnN4WD0C63LjeZxJvyJcDU2exVmm1cmdWJ6GWWnEGss6R+4M8Q7L72r4KKiw8M+kX1s9sWpZu1o90Viq+YRPYvEpsCQQCm4BcEA1DVRn9hbYxHUSCMOBNeKmoKIok0VdB6TPWWlqx7xGccan9KcJ4xcJIy9B0B2rDtBdzPLEJdez9IxS1CdfvvEC5e0sNJ84AlANkT44ay67jEr1mkIf5dk3yWxYF9lLzUkqGVHo8bmGQ8bo/AQpFH55wp6xrKOmEehgjU67Dq7U5oP3MrY6+lzkXF9zyZcbooqhPRGuPs34Z3Z8bY2Nok3/qv6aO0btUOiy9NOWZamL4SuuF/2DNZVmnO2GFn9T1UkS38X3hUE089CifuflTM+jjc33XZa7wjy0KIR5Qoi+/9Y7iVf4HzjeuHHjxo0T8A+AYUQvEpHDbgAAAABJRU5ErkJggg==",
          username,
          password,
          email,
          userUID,
        });
      })
      .then(() => console.log("Successfull"));
  };

  return (
    <View className="flex-1 ">
      <Input
        placeholder="Enter Your Username"
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        leftIcon={{ type: "material", name: "account-circle" }}
      />
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
      <Input
        placeholder="Avatar Url"
        label="Avatar"
        value={avatar}
        onChangeText={(text) => setAvatar(text)}
        leftIcon={{ type: "material", name: "link" }}
      />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="SignUp" className="mt-5" onPress={registerUser} />
    </View>
  );
}
