import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useState } from "react";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const onChangeEmail = (inputEmail: string) => setEmailInput(inputEmail);
  const onChangePassword = (inputPass: string) => setPasswordInput(inputPass);
  const logInKey = () => {
    console.log("Email: ", emailInput);
    console.log("Password: ", passwordInput);
  };

  const onSignUp = () => {
    console.log("onSignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "gray" }}>
        Welcome to the first practice Chat app !
      </Text>
      <StatusBar style='auto' />
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={onChangeEmail}
        // value={number}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={onChangePassword}
      />
      <View style={{ paddingVertical: 6 }}></View>
      {/* <Button title='Log in' onPress={logInKey} />
       */}
      <Pressable style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <View style={{ paddingVertical: 10 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Pressable
          onPress={onSignUp}
          style={{
            flex: 1,
            paddingRight: 20,
          }}
        >
          <Text
            style={{
              color: "gray",
              textAlign: "right",
            }}
          >
            Sign Up
          </Text>
        </Pressable>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#2BC4DF",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
