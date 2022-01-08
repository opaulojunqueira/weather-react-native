import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const InfoCard = (props) => {

    const styles = StyleSheet.create({
        card: {
            alignItems: 'center',
            margin: 5,
            minWidth: 150,

        },
        cardText: {
            color: '#e8e8e8',
            margin: 5,
            marginLeft: 32,
            fontSize: 18,
        },
    });

    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>{props.title}</Text>
            <Text style={[styles.cardText, {color: '#d3d3d3'}]}>{props.value}</Text>
        </View>
    )
}

export default InfoCard