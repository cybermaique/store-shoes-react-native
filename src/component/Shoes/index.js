import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes(props) {

    //ajeitar nome do produto caso seja muito grande
    function filterDesc(desc){
        if(desc.length < 22){ //se tiver menos de 27, deixar passar
            return desc;
        }

        return `${desc.substring(0, 22)}...`; //colocar ... dps dos 25 caracteres
    }

 return (
    <TouchableOpacity style = {styles.container}>
        <Image 
            source = {props.img}
            style = {styles.shoesImg}
        />

        <Text style = {styles.shoesText}>
        {/* o children é para acessar a propriedade de dentro, no caso o nome do sapato */}
            {filterDesc(props.children)} 
        </Text>

        <View opacity = {0.4}>
            <Text style = {styles.shoesText}>{props.cost}</Text>
        </View>
    </TouchableOpacity> 
   
  );
 }

  const styles = StyleSheet.create({
      container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      shoesImg:{
        width: 175,
        height: 175
      },
      shoesText:{
          fontSize: 16
      }
  });