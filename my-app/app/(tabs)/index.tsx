import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />

      <View style={styles.container}>
        <Text style={styles.title}>Trainer Search App</Text>
        <Text style={styles.subtitle}>Your React Native Expo setup works! 🎉</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
});
