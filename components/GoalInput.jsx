import React from "react";
import { View, TextInput, Button, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import GoalImage from "../assets/goal.png";
const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Task today"
          onChangeText={props.goalHandler}
          value={props.value}
          
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button color="#47B5FF" title="Add Goal" onPress={props.addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button color="#B22727" title="Cancel" onPress={props.close} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#06283D",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    height: 150,
    width: 150,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#DFF6FF",
    backgroundColor:"#DFF6FF",
    borderRadius:8,
    width: "100%",
    marginRight: 5,
    padding: 10,
  },
  buttonGroup: {
    margin: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    backgroundColor: "red",
  },
});
