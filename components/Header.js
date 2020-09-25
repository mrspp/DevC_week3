import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>{props.result}</Text>
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
