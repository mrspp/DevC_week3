import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  // const getResultColor = () => {
  //   if (props.result === "Victory!") return "green";
  //   if (props.result === "Defeat!") return "red";
  //   return null;
  // };
  let textColor = props.result === "Victory!" ? "green" : "red";
  return (
    <View style={styles.headerWrapper}>
      <Text style={[styles.headerText, { color: textColor }]}>
        {props.result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
