import React from 'react'
import { View, Text } from 'react-native'
import PlayerListItem from './PlayerListItem'
import {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

import { allPlayersState, filteredPlayers } from '../atom/Players'

const PlayersListing = () => {
    // const players1 = useRecoilState(allPlayersState)
    const players = useRecoilValue(filteredPlayers)
    // const setPlayers = useSetRecoilState(allPlayersState)
    return (
        <BottomSheetFlatList 
        data={players}
        renderItem={({item})=> 
        <PlayerListItem 
            player={item}
            keyExtractor={(item: any, index: { toString: () => any; }) => index.toString()}
        />}
      />
    )
}

export default PlayersListing
