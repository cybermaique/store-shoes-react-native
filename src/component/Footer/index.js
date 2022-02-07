import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <View style={{marginHorizontal: 10}}>
               <Shoes img={require('../../assets/1.png')} cost="110,90">
                    Nike Air Max Dia
               </Shoes>
           </View>
           <View style={{marginHorizontal: 10}}>
               <Shoes img={require('../../assets/5.png')} cost="990,30">
                    Nike Pro Air
               </Shoes>
           </View>
           <View style={{marginHorizontal: 10}}>
               <Shoes img={require('../../assets/3.png')} cost="499,90">
                    Nike Sinfhux Plus
               </Shoes>
           </View>
       </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        paddingVertical: '2%',
        paddingHorizontal: '2%',
    }
})