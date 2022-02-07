import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot'
import SizeShoes from '../../component/SizeShoes';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {
 
  navigation.setOptions({
    headerTitle: 'Nike Air 10'
  })

  return (
    <ScrollView style={styles.container}>
        <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
        />

        <View>
          <View>
            <Text style={[styles.title, {fontSize: 24}]}>R$ 280,90</Text>
          </View>
          <View opacity={0.4}>
            <Text style={[styles.title, {fontSize: 30}]}>Nike Downshifter 10</Text>
          </View>

          <View style={styles.dotContainer}> 
            <Dot color="#2379F4" />
            <Dot color="#FB6E53" />
            <Dot color="#DDD" />
            <Dot color="#000" />
          </View>

            <View style={{flexDirection: 'row', width: '100%'}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SizeShoes bgColor="#17181A" color="FFF">40</SizeShoes>
                <SizeShoes>41</SizeShoes>
                <SizeShoes>42</SizeShoes>
              </ScrollView>
            </View>

            <View style={styles.textContent}>
              <Text style={styles.textTitle}>
                Nike Downshifter 10
              </Text>
              <Text style={styles.textContent}>
              O Tênis Nike Downshifter 10, Masculino é o seu novo tênis de corrida favorito! O modelo apresenta cabedal em malha de tramas abertas que auxiliam na flexibilidade e na ventilação interna, que afasta o mau odor. A palmilha macia fornece conforto durante as passadas, enquanto o solado emborrachado garante aderência e tração. A entressola com espuma macia proporciona suporte enquanto você foca no treino. Por fim, o design moderno da peça dá o tom do visual. Mostre seu potencial no esporte com esse tênis masculino Nike!
              </Text>
              <Text style={styles.textList}>
                - Categoria: Amortecimento
              </Text>
              <Text style={styles.textList}>
                - Material: Mesh
              </Text>
            </View>

            <Button />

            <View style={styles.line} />

            <Footer />
          </View>
    </ScrollView>
  );
} 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
    },
    image:{
      width: '100%'
    },
    title: {
      fontFamily: 'Anton_400Regular'
    },
    dotContainer:{
      flexDirection: 'row', //deixa em forma de lista
      marginVertical: '7%'
    },
    textContent:{
      fontSize: 16,
      lineHeight: 25,
      marginVertical: '2%',
      paddingHorizontal: '2%'
    },
    textTitle:{
      fontSize: 22,
      lineHeight: 25,
      marginVertical: '2%'
    },
    textList:{
      fontSize: 16,
      lineHeight: 25,
    },
    line:{
      borderWidth: 1,
      borderBottomColor: 'black',
      marginVertical: '2%'
  }
  });