import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import field from '../assets/images/field.jpg';

const players: {[key: string]: null[]} = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
}
export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground 
        source={field}
        resizeMode="contain"
        style={styles.bgimage}
        >
          {Object.keys(players).map((position,id)=>(
              <View key={id} style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                {players[position].map((player,id)=>(
                  <Text key={id}>{position}</Text>
                ))}
              </View>
          ))}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  bgimage: {
    width: '100%',
    height: '100%',
    aspectRatio: 2/3,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
