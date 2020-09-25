import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ChoiceButtons from "./components/ChoiceButtons";
import CHOICES from "./choices";
import ChoiceCard from "./components/ChoiceCard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: {},
    };
  }

  onChoicePress = (choice) => {
    const userChoice = CHOICES.find((item) => item.name === choice);
    this.setState({ userChoice });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <ChoiceCard playerName="You" choice={this.state.userChoice} />
            <Text>VS</Text>
            <ChoiceCard playerName="Computer" choice={CHOICES[1]} />
          </View>
        </View>
        <View style={styles.choiceButtons}>
          <View style={styles.buttonContainer}>
            <ChoiceButtons onButtonPress={this.onChoicePress} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ebee",
  },
  header: {
    flex: 0.15,
    backgroundColor: "red",
  },
  playArea: {
    flex: 0.5,
    backgroundColor: "blue",
  },
  choiceButtons: {
    flex: 0.35,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
  },
});
