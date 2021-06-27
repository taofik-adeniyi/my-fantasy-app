import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
const field = require("../assets/images/field.jpg");
import FieldedPlayer from "./FieldedPlayer";

import { Entypo } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import { myPlayerByPosition } from "../atom/MyTeam";

// const players: { [key: string]: null[] } = {
//   FWD: [null, null, null],
//   MID: [null, null, null],
//   DEF: [null, null, null, null],
//  GCC: [null],
// };

export const Field = () => {
  const players = useRecoilValue(myPlayerByPosition);
  console.log(players);
  return (
    <ImageBackground
      source={field}
      resizeMode="contain"
      style={{
        width: "100%",
        aspectRatio: 2 / 3,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {Object.keys(players).map((position, id) => (
        <View
          key={id}
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {players[position].map((player, id) => (
            <FieldedPlayer key={id} player={player} position={position} />
          ))}
        </View>
      ))}
      <View
        style={{
          backgroundColor: "red",
          width: "20%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          //   height: "10%",
          padding: 7,
          borderRadius: 20,
          marginRight: "auto",
          marginLeft: "10%",
          //   marginTop: "95%",
          //   position: "absolute"
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            paddingHorizontal: 5,
          }}
        >
          4-3-3
        </Text>
        <Entypo
          name="arrow-bold-down"
          size={14}
          color="black"
          style={{ paddingRight: 5 }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
