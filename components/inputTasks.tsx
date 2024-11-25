import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  onAdd: (newTask: string) => void;
};

export const InputTasks = ({ onAdd }: Props) => {
  const [newTask, setNewTask] = useState("");

  const handleAddNewTask = () => {
    if (newTask) {
      onAdd(newTask);
      setNewTask("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite uma tarefa..."
        style={styles.inputTask}
        onChangeText={(e) => setNewTask(e)}
        value={newTask}
      />
      <Pressable style={styles.button} onPress={handleAddNewTask}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    margin: 10,
  },
  inputTask: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 10,
  },
});
