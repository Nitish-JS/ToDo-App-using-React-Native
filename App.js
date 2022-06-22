import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [entertedGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  const goalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    // setGoalList([]);
    const id = new Date().getTime();
    setGoalList((prevList) => [
      ...prevList,
      { text: entertedGoal, key: id },
    ]);
    setEnteredGoal('');
    // console.log(goalList);
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput value={entertedGoal} goalHandler={goalHandler} addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(item) => {
           return <GoalItem text={item.item.text} />
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  
});
