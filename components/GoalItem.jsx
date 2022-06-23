import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalList}>
      <Pressable
      // style for ios ripple effect
        style={({pressed}) => pressed && styles.pressedItem}
        android_ripple={{ color: "#210644" }}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    borderRadius: 8,
    backgroundColor: "#073987",
    marginVertical: 8,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
