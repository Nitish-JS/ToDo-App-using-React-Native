import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [entertedGoal, setEnteredGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  const openModal = () => {
    setModalVisible(true);
  };
  const goalHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    const id = new Date().getTime();
    entertedGoal !== ""
      ? setGoalList((prevList) => [...prevList, { text: entertedGoal, id: id }])
      : null;
    setEnteredGoal("");
    closeModal();
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const deleteGoalHandler = (id) => {
    // console.log("Before deleting" + goalList);
    setGoalList((prevList) => {
      return prevList.filter((goal) => goal.id !== id);
    });
    // console.log("after deleting : "+goalList);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Task" color="#1363DF" onPress={openModal} />
        <GoalInput
          visible={modalVisible}
          value={entertedGoal}
          goalHandler={goalHandler}
          addGoalHandler={addGoalHandler}
          close={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(item) => {
              return (
                <GoalItem
                  id={item.item.id}
                  text={item.item.text}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
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
