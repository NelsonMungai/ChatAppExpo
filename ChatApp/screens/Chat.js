import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { authentication } from "../firebase/firebaseconfig";

export default function Chat({ route }) {
  const currentUser = authentication?.currentUser?.uid;
  const receipientUser = route.params.uid;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messageArray) => {
    const msg = messageArray;
    console.log(msg);
    const myMsg = {
      msg,
      sentBy: currentUser,
      sentTo: receipientUser,
    };
    console.log(myMsg);
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
  }, []);
  return (
    <GiftedChat
      messages={messages}
      onSend={(text) => onSend(text)}
      user={{ _id: currentUser }}
    />
  );
}

const styles = StyleSheet.create({});
