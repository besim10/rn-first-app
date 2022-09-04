import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddGoal = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };
  const handleDeleteGoal = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        title="Add Course Goal"
        onPress={() => {
          setIsAddMode(true);
        }}
      />
      <GoalInput
        onCancel={cancelGoalAdditionHandler}
        visible={isAddMode}
        handleAddGoal={handleAddGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(item) => (
          <GoalItem
            id={item.item.id}
            onDelete={handleDeleteGoal}
            title={item.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
