import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dot() {
 return (
   <View style={styles.container}>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red'
    }
});