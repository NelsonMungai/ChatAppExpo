import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { authentication, db } from "../firebase/firebaseconfig";
import ListItem from "../components/ListItem";
import { Button } from "react-native-elements";

const Home = ({ navigation }) => {
  // retrive our users from backend
  const [users, setUsers] = useState([]);

  const LogoutUser = async () => {
    authentication.signOut().then(navigation.replace("Login"));
  };
  const getUsers = async () => {
    const docsRef = collection(db, "users");
    // get friends=q
    const friends = query(
      docsRef,
      where("userUID", "!=", authentication?.currentUser?.uid)
    );
    const docsnap = onSnapshot(friends, (onSnap) => {
      let data = [];
      onSnap.docs.forEach((user) => {
        data.push({ ...user.data() });
        setUsers(data);
        console.log(user.data());
      });
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log("These are the users", users);
  return (
    <>
      <FlatList
        data={users}
        key={(user) => user.userUID}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate("Chat")}
            title={item.username}
            subtitle={item.email}
            image={item.avatarURL}
          />
        )}
      />
      <Button title="LogOut" onPress={LogoutUser} />
    </>
  );
};

export default Home;
