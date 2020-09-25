import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ChoiceButtons from "./components/ChoiceButtons";
import CHOICES from "./choices";
import ChoiceCard from "./components/ChoiceCard";
import Header from "./components/Header";

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: "Make your choice",
    };
  }

  onChoicePress = (choice) => {
    const userChoice = CHOICES.find((item) => item.name === choice);
    const computerChoice = randomComputerChoice();
    this.setState({ userChoice, computerChoice });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header result={this.state.result} />
        </View>
        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <ChoiceCard playerName="You" choice={this.state.userChoice} />
            <Text>VS</Text>
            <ChoiceCard
              playerName="Computer"
              choice={this.state.computerChoice}
            />
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
  },
  playArea: {
    flex: 0.55,
  },
  choiceButtons: {
    flex: 0.3,
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
