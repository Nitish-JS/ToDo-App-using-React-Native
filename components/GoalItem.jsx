import React from "react";
import { StyleSheet } from "react-native";
import { View,Text } from "react-native";
const GoalItem = (props) => {

  return (
    <View style={styles.goalList}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    borderRadius: 8,
    backgroundColor: "#5e08cc",
    padding: 8,

    marginVertical: 8,
  },
  goalText: {
    color: "white",
  },
});
