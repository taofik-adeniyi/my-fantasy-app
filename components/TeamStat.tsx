import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil"
import { numberOfPlayers, valueOfPlayers } from "../atom/MyTeam"
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TeamStat = () => {
    const nop = useRecoilValue(numberOfPlayers)
    const value = useRecoilValue(valueOfPlayers)
  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>{nop} / 15</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.value}>€{((100_000_000 - value)/1_000_000).toFixed(0)}m</Text>
      </View>
      <View style={{alignItems: "center", marginLeft: 70}}>
        <MaterialCommunityIcons 
            name="hammer-wrench" 
            size={20} 
            color="black"
        />
        <Text style={styles.iconLabel}>Auto complete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "90%",
        borderWidth: 3,
        borderColor: "#05cff2",
        borderRadius: 10,
        flexDirection: "row",
        padding: 10,
        paddingLeft: 20,
        // justifyContent: "space-between",
    },
    valueContainer: {
        marginRight: 25,
    },
    label: {
        color: "#999"
    },
    iconLabel: {
        fontSize: 14,
        fontWeight: "400"
    },
    value: {
        fontWeight: "bold",
        fontSize: 18,
    }
})
export default TeamStat;
