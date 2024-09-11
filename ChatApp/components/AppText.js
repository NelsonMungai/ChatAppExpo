import { Text, Platform, StyleSheet } from "react-native";
import React from "react";
import { style } from "twrnc";

export default function AppText({
  inputText,
  stylesLing,
  onPress,
  placeholder,
  numberOfLines,
}) {
  return (
    <Text
      style={[style.fonts, stylesLing]}
      onPress={onPress}
      numberOfLines={numberOfLines}
    >
      {inputText}
    </Text>
  );
}

const styles = StyleSheet.create({
  fonts: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Lato" : "Roboto",
  },
});
