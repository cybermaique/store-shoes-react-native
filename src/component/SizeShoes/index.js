import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function SizeShoes(props) {
 return (
   <View style={[styles.container, {backgroundColor: props.bgColor || '#FFF'}]}>
       <Text style={[styles.text, {color: 'props.color' || '#C9C'}]}>
           {props.children}
       </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 150, //responsividade
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10,
        backgroundColor: 'black'
    },
    text:{
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})