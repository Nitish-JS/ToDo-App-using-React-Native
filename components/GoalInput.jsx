import React from 'react'
import { View,TextInput,Button } from 'react-native'
import { StyleSheet } from 'react-native'
const GoalInput = (props) => {
    
  return (
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Task today"
          onChangeText={props.goalHandler}
          value={props.value}
        />
        <Button title="Add Goal" onPress={props.addGoalHandler} />
      </View>
  )
}


export default GoalInput

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1,
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 5,
        padding: 8,
      }
})