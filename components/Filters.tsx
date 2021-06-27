import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import {useRecoilState} from "recoil"
import {positionFilterState} from "../atom/Players"

const positions = ['FWD', 'MID', 'DEF', 'GCK']

const Filters = () => {
    const [positionFilter, setPositionFilter] = useRecoilState(positionFilterState)

    const onFilterPress = (position: string) => {
        setPositionFilter((curPositionFilter)=> {
            if(curPositionFilter.includes(position)) {
                return curPositionFilter.filter((pos)=> pos !== position)
            }else {
                return [...curPositionFilter, position]
            }
        })
    }
    const isSelected = (position: string) => {
        return positionFilter.includes(position)
    }
    return (
        <View style={styles.container}>
            {positions.map((position)=>(
                <Pressable 
                    onPress={()=> onFilterPress(position)} 
                    style={[styles.filterContainer, {backgroundColor: isSelected(position) ? "#999" : "#ddd"}]}
                >
                <Text style={styles.text}>{position}</Text>
            </Pressable>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
        paddingHorizontal: 20,
    },
    filterContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        
        justifyContent: "center",
        alignItems: "center",
        
        // box shadow styles ios
        shadowColor: '#05cff2',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        // for android box shadow
        // elevation: 5
    },
    text: {
        color: "#000",
        fontWeight: "bold",
    }
})
export default Filters
