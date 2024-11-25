import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { InputTasks } from "../components/inputTasks";
import { Task } from "../components/task";
import { useState } from "react";

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAdd = (newTask: string) => {
    setTasks([...tasks, { label: newTask, isDone: false }]);
  };

  const onDelete = (index: number) => {
    let taskAux = [...tasks];
    taskAux.splice(index, 1);
    setTasks([...taskAux]);
  };

  const onDone = (index: number) => {
    let taskAux = [...tasks];
    taskAux.splice(index, 1, {
      label: tasks[index].label,
      isDone: !tasks[index].isDone,
    });
    setTasks([...taskAux]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputTasks onAdd={onAdd} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          pos={index}
          onDone={onDone}
        />
      ))}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
