import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-web";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { create } from "twrnc";
import AppText from "./AppText";

export default function ListItem({
  title,
  subtitle,
  image,
  ImageComponent,
  onPress,
}) {
  return (
    <TouchableOpacity underlayColor="#333" onPress={onPress}>
      <View style={style.container}>
        {ImageComponent}
        {image && <Image source={{ uri: image }} style={style.image} />}

        <View style={style.ownerHolder}>
          <AppText
            inputText={title}
            stylesLing={style.name}
            numberOfLines={1}
          />
          {subtitle && (
            <AppText
              inputText={subtitle}
              stylesLing={style.listing}
              numberOfLines={2}
            />
          )}
          <AppText />
        </View>
        <MaterialCommunityIcons
          name="chevron-double-right"
          size={20}
          color="#000"
          className="p-4 border-2 border-red-400 rounded-full"
        />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVerical: 0,
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 10,
    marginVertical: 10,
  },
  ownerHolder: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15,
    JustifyContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
  listing: {
    color: "#6e6969",
    marginTop: 5,
  },
});
