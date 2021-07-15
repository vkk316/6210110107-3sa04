import React from "react";
import {StyleSheet ,Text,View } from "react-native";

export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.text}>{props.main}</Text>
            <Text>description</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View>
                <Text>{props.temp}</Text>
                <Text>°C</Text>
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
    }
});