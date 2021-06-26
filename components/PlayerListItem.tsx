import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Player } from "../types";

interface Props { 
    player: Player;
}
const PlayerListItem = ({player}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ borderRightWidth: 2, borderColor: "#eee" }}>
        <FontAwesome5 name="exclamation-circle" size={24} color="black" />
      </View>
      <Image 
        style={styles.image}
        source={{uri: `https://media.api-sports.io/football/players/${player.id}.png`}} />

      <View style={{ flexGrow: 1 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text>{player.match}</Text>
      </View>

      <View style={[styles.colThree, { alignItems: "flex-end" }]}>
        <Text style={styles.name}>€{(player.price/ 1_000_000).toFixed(1)}m</Text>
        <Text>{player.position}</Text>
      </View>

      <Text style={styles.point}>{player.totalPoints}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#333",
    marginRight: 10,
  },
  colThree: {
    marginHorizontal: 10,
  },
  name: {
    fontWeight: "bold",
  },
  point: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default PlayerListItem;
