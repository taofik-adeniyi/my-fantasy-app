import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { FontAwesome5 } from "@expo/vector-icons";
import { Player } from "../types";
import { myTeamList, myFormationState } from "../atom/MyTeam";

interface Props {
  player: Player;
}
const PlayerListItem = ({ player }: Props) => {

    const myFormation = useRecoilValue(myFormationState)
  const [myPlayers, setMyPlayers] = useRecoilState(myTeamList);

  const noOfPlayersOnPos = myPlayers.filter(p => p.position === player.position).length
  
  const onPress = () => {
      
    setMyPlayers((currPlayers) => {
        if(currPlayers.some((p) => p.id === player.id)){
            return currPlayers.filter((p) => p.id !== player.id)
        }
        // check on how to add players to position
        if(noOfPlayersOnPos < myFormation[player.position]){
            return [...currPlayers, player]
        }
        return currPlayers
    });
  };

  const isSelected = myPlayers.some((p) => p.id === player.id);
  
  return (
    <Pressable 
        onPress={onPress} 
        style={[styles.container, {backgroundColor: isSelected ? "#d170ba": "white"}]}
    >
      <View style={{ borderRightWidth: 2, borderColor: "#eee" }}>
        <FontAwesome5 name="exclamation-circle" size={24} color="black" />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
      />

      <View style={{ flexGrow: 1 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text>{player.match}</Text>
      </View>

      <View style={[styles.colThree, { alignItems: "flex-end" }]}>
        <Text style={styles.name}>
          €{(player.price / 1_000_000).toFixed(1)}m
        </Text>
        <Text>{player.position}</Text>
      </View>

      <Text style={styles.point}>{player.totalPoints}</Text>
    </Pressable>
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
