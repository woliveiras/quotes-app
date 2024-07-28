import { useState } from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";

import { Quote } from "./components/quote";
import { quotes } from "./quotes";
import { createIndex } from "./utils/createIndex";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 32,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
  },
} as const);

export default function Index() {
  const [index, setIndex] = useState(0);
  const quotesRef = quotes;

  const onPress = () => {
    const newIndex = createIndex(index, quotesRef.length);
    setIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={1}
        underlayColor={"#f0f0f0"}
      >
        <Quote text={quotes[index]} />
      </TouchableHighlight>
    </View>
  );
}
