import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, ImageBackground,View, Text} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Satun', code: '91000' },
    { place: 'Yala', code: '95000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Prachin Buri', code: '25000' },
    { place: 'Sa Kaeo', code: '27000' },
    { place: 'Nakhon Ratchasima', code: '30000' },
    { place: 'Buriram', code: '31000' },
    { place: 'Surin', code: '32000' },    
    { place: 'Nong Bua Lamphu', code: '39000' },    

]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code , zipPlace: place})}>
        <View style = {styles.zipItem}>
            <Text style = {styles.zipPlace}>{place}</Text>
            <Text style = {styles.zipCode} >{code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg.png')} style={styles.background}>
        <View style={styles.content}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    background: {
        //alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    content: {
        margin: 4,
    },
    zipItem: {
        backgroundColor: '#ffffff',
        margin: 4,
        padding: 14,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        shadowRadius: 4,
    },
    zipPlace: {
        flex: 1,
        fontSize: 20,
    },
    zipCode: {
        fontStyle: 'italic',
        textAlignVertical: 'center'
        
    }
})