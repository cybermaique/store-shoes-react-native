import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Button() {
 return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnComprar}>
            <Text style={styles.title}>COMPRAR</Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnComprar:{
        width: 300,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 17,
        color: '#FFF'
    },
});