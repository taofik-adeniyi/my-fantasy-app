import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Filters = () => {
    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <Text style={styles.text}>FWD</Text>
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.text}>MID</Text>
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.text}>DEF</Text>
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.text}>GKC</Text>
            </View>
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
        backgroundColor: "#ddd",
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
