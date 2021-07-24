import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";

export default function ExtraForcast(props) {
    return (
        <View style={styles.row}>
            <View style={styles.column}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://www.iconsdb.com/icons/preview/white/visible-xxl.png',
                }}
            />
                <Text style={styles.text}> {props.visibility} </Text>
                <Text style={styles.unitText}>Meter</Text>
            </View>
            <View style={styles.column}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://www.iconsdb.com/icons/preview/white/water-xxl.png',
                }}
            />
                <Text style={styles.text}> {props.humidity} </Text>
                <Text style={styles.unitText}>%</Text>
            </View>
            <View style={styles.column}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://www.iconsdb.com/icons/preview/white/wind-turbine-xxl.png',
                }}
            />
                <Text style={styles.text}> {props.wind} </Text>
                <Text style={styles.unitText}>kt</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
    text:{
        marginTop: 6,
        color: '#fff',
        fontWeight: 'bold',
    },
    unitText:{
        includeFontPadding: false,
        fontStyle: 'italic',
        color: '#fff',
    }
});