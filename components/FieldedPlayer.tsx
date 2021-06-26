import React from "react";
import { View, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type FieldPlayerProps = {
    player: null;
    position: string;
}
const FieldedPlayer = (props: FieldPlayerProps) => {
    const {player, position} = props
  return (
    <View style={{ alignItems: "center" }}>
      <MaterialCommunityIcons
        name="tshirt-v"
        size={35}
        color={player ? "#d170db" : "#5c5c5cbb"}
      />
      <Text
        style={{
          backgroundColor: "#333333bb",
          color: "white",
          fontWeight: "bold",
          fontSize: 12,
          padding: 2,
          paddingHorizontal: 7,
        }}
      >
        {position}
      </Text>
    </View>
  );
};

export default FieldedPlayer;
