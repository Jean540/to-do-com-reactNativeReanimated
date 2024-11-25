import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  BounceInUp,
  BounceOutUp,
  FadeOut,
  SlideInLeft,
  SlideOutLeft,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type Props = {
  task: Task;
  onDelete: (pos: number) => void;
  pos: number;
  onDone: (pos: number) => void;
};

export const Task = ({ task, onDelete, pos, onDone }: Props) => {
  const elementScale = useSharedValue(1);

  const animationStyles = useAnimatedStyle(() => ({
    transform: [{ scale: elementScale.value }],
  }));

  const handleDone = (pos: number) => {
    onDone(pos);
    if (task.isDone == false) {
      elementScale.value = withRepeat(
        withTiming(1.1, { duration: 200 }),
        2,
        true
      );
    }
  };

  return (
    <Animated.View
      entering={SlideInLeft}
      exiting={FadeOut}
      style={[styles.taskItem, animationStyles]}
    >
      <Pressable style={styles.content} onPress={() => handleDone(pos)}>
        <View
          style={[styles.checkbtt, task.isDone && { backgroundColor: "black" }]}
        ></View>
        <Text style={task.isDone && { textDecorationLine: "line-through" }}>
          {task.label}
        </Text>
      </Pressable>

      <Pressable onPress={() => onDelete(pos)}>
        <Text style={styles.deletBtt}>Excluir</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbtt: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  deletBtt: {
    fontSize: 12,
  },
});
