import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
// Icons
import { Feather, EvilIcons, Fontisto, FontAwesome } from '@expo/vector-icons';

const MainCard = (props) => {

    const Icon = () => {
        if (props.icon === 'morning') {
            return (
                <Feather name="sun" style={styles.cardIcon} size={40} color="orange" />
            )
        }
        if (props.icon === 'afternoon') {
            return (
                <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="orange" />
            )
        }
        if (props.icon === 'night') {
            return (
                <FontAwesome name="moon-o" style={styles.cardIcon} size={40} color="orange" />
            )
        }
    }

    const styles = StyleSheet.create({
        card: {
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            width: 110,
            height: 210,
            borderRadius: 10,
        },
        refreshButton: {
            position: 'absolute',
            margin: 30,
            alignSelf: 'flex-start'
        },
        cardText: {
            color: 'white',
            margin: 15,
            fontSize: 20,
        },
        cardIcon: {
            color: 'white',
            margin: 15,

        },
    });

    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.title}</Text>
            <Icon></Icon>
            <Text style={styles.cardText}>{props.temperature}</Text>
        </View>
    )
}

export default MainCard