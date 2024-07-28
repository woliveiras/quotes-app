import { useState } from "react";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

import { Quote } from "./components/quote";
import { quotes } from "./quotes";
import { createIndex } from "./utils/createIndex";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 32,
    paddingRight: 32,
  },
  content: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
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
    <ScrollView contentContainerStyle={styles.scrollView}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={1}
        underlayColor={"#f0f0f0"}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Brasil 🇧🇷</Text>
          <Quote text={quotes[index]} />
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
}
