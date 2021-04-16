import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("shaun");
  const [age, setAge] = useState("30");
  // const [person, setPerson] = useState({
  //   name: "mario",
  //   age: 40,
  // });

  // const clickHandler = () => {
  //   setName("chun-li");
  //   setPerson({ name: "luigi", age: 45 });
  // };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        keybor
        style={styles.input}
        placeholder="e.g. Jhon Doe"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 99"
        keyboardType="numeric"
        onChangeText={(value) => setAge(value)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
      {/* <Text>
        He's name is {person.name} and his age is {person.age}
      </Text> */}
      {/* <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View> */}
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
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  // header: {
  //   backgroundColor: "pink",
  //   padding: 20,
  // },
  // boldText: {
  //   fontWeight: "bold",
  // },
  // body: {
  //   backgroundColor: "yellow",
  //   padding: 20,
  //   fontWeight: "bold",
  // },
});
