import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import { Field } from "../components/Field";
import TeamStat from "../components/TeamStat";
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import PlayerListItem from "../components/PlayerListItem";
import {players} from "../assets/data/players";
import Filters from "../components/Filters";

const snapPoints = [0, "50%"]

export default function TabOneScreen() {
  
  const viewPlayers = () => {
    playersBottomSheet.current?.expand()
  };

  const openFilter = () => {
    filterBottomSheet.current?.expand()
  }

  const playersBottomSheet = useRef<BottomSheet>(null)
  const filterBottomSheet = useRef<BottomSheet>(null)
  
  return (
    <SafeAreaView style={styles.container}>
      <TeamStat />
      <Field />
      <View style={styles.multiBtn}>
        <View style={styles.btnWrap}>
          <Text>Price</Text>
        </View>
        <View style={styles.btnWrap}>
          <Text>Fixtures</Text>
        </View>
        <View style={styles.btnWrap}>
          <Text>Points</Text>
        </View>
      </View>
      <Pressable onPress={viewPlayers} style={styles.btnContainer}>
        <Text>View Players</Text>
      </Pressable>

      <BottomSheet
        ref={playersBottomSheet}
        index={0}
        snapPoints={snapPoints}
      >
        <Pressable onPress={openFilter} style={styles.btnContainer}>
          <Text>Filter</Text>
        </Pressable>
        <BottomSheetFlatList 
          data={players}
          renderItem={({item})=> <PlayerListItem player={item} />}
        />
      </BottomSheet>

      <BottomSheet 
        ref={filterBottomSheet}
        index={0}
        snapPoints={snapPoints}
      >
        <Filters />
      </BottomSheet>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72cc5e",
  },
  btnContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 15,
    marginTop: "auto",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  multiBtn: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "60%",
    marginBottom: 10,
    justifyContent: "space-between",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#05cff2",
  },
  btnWrap: {
    backgroundColor: "gray",
    width: "33%",
    padding: 10,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
  },
  bottomSheetContainer : {

  }
});
