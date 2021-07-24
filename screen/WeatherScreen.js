import React from "react";
import {StatusBar, View} from 'react-native';
import Weather from "../components/Weather";

export default function WeatherScreen({ route }) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} town = {route.params.zipPlace}/>
            <StatusBar style="auto" />
        </View>
    );
}
