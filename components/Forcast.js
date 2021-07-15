import React from "react";
import {StyleSheet ,Text,View } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.column}>
            <Text style={styles.text}>{props.main}</Text>
            <Text>description</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View>
                <Text>{props.temp} °C</Text>
            </View>
        </View >
    );
} 

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'#fff',
    },
    description:{
        fontSize:18,
        margin:30,
    },
    column:{
        flexDirection: 'column',
        alignItems: 'center',
    }
});