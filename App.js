import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Shaun", id: "1" },
    { name: "Yoshi", id: "2" },
    { name: "Mario", id: "3" },
    { name: "Luigi", id: "4" },
    { name: "Peach", id: "5" },
    { name: "Toad", id: "6" },
    { name: "Bowser", id: "7" },
  ]);
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        // key={id}
        keyExtractor={(item) => {
          return item.id;
        }}
        data={people}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
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
