import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleInputChange = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
  };
  const addGoal = () => {
    props.handleAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  const onCancel = () => {
    props.onCancel();
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoal}
          placeholder="Course Goals"
          onChangeText={handleInputChange}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onCancel} title="CANCEL" color="red" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoal} title="ADD" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
