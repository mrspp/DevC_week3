import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ChoiceCard = (props) => {
  const {
    choiceContainer,
    choiceCardTitle,
    choiceImage,
    choiceDescription,
  } = styles;

  return (
    <View style={choiceContainer}>
      <Text style={choiceCardTitle}>{props.playerName}</Text>
      <Image style={choiceImage} source={{ uri: props.choice.uri }} />
      <Text style={choiceDescription}>{props.choice.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  choiceContainer: {
    flex: 1,
    alignItems: "center",
  },
  choiceDescription: {
    fontSize: 25,
    color: "#250902",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
});

export default ChoiceCard;
