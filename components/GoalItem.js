import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onDelete(props.id);
      }}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ccc",
    padding: 16,
    marginVertical: 10,
  },
});
export default GoalItem;
