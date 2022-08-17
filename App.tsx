import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray" }}>
        Welcome to the first practice Chat app !
      </Text>
      <StatusBar style='auto' />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder='Email'
      />
      <TextInput style={styles.input} placeholder='Password' />
      <View style={{ paddingVertical: 6 }}></View>
      <Button title='Log in' />
      <View style={{ paddingVertical: 10 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "gray",
            flex: 1,
            textAlign: "right",
            paddingRight: 20,
          }}
        >
          Sign Up{" "}
        </Text>
        <Text
          style={{ color: "gray", flex: 1, textAlign: "left", paddingLeft: 20 }}
        >
          Forget Password
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
  },
});
