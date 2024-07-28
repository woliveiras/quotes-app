import { Text, StyleSheet, View } from "react-native";

type Props = {
  text: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    height: 180,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
} as const);

export const Quote = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
