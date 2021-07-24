import React, { useState , useEffect} from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import ExtraForcast from "./ExtraForcast";
import Forecast from "./Forcast";
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        icon: '01d',
        humidity: 0,
        wind: 0,
        visibility: 0,
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&appid=16749032afae50b610388ee198465e8d`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon,
                        humidity: json.main.humidity,
                        visibility: json.visibility,
                        wind: json.wind.speed,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])


    return (
        <View>
            <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
                <View style={styles.container}>
                    <Text style={styles.town}>{props.town}</Text>
                    {/* <Text style={styles.zipCode}>{props.zipCode}</Text> */}
                    <Forecast {...forecastInfo} />
                </View>
                <View style={styles.container}>
                    <ExtraForcast {...forecastInfo} />
                    
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        margin: 14,
        padding: 12,
        alignItems: 'center',
        width: '95%',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        borderRadius: 20,
    },
    town: {
        fontSize: 24,
        color: '#ffffff',
    },
    zipCode: {
        fontSize: 14,
        color: '#ffffff',
    }
});