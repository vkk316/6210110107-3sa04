import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.column}>
            <View style={styles.tempPart}>
                <Text style={styles.intPart}>{Math.round(props.temp)}</Text>
                <Text style={styles.degree}>°C</Text>
            </View>
            {/* <Text style={styles.text}></Text> */}
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
                }}
            />

            <Text >{props.description}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: '#fff',
    },
    description: {
        fontSize: 18,
        margin: 30,
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tempPart: {
        flexDirection: "row",
        margin: 10
    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
    intPart: {
        //flex:1,
        fontSize: 100,
        textAlignVertical: 'center',
        includeFontPadding: false,
        color: '#fff',
    },
    degree: {
        fontSize: 43,
        color: '#fff',
    }
});