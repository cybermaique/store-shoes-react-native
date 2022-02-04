import React from 'react';
import { View, Text } from 'react-native';

//quando navegamos em uma página, recebemos o parâmetro navigation, e dentro dele temos o sertoptions, que podemos passar algumas propriedades, como o settitle para alterar o titulo do header.

export default function Detail({ navigation }) {
 
  navigation.setOptions({
 headerTitle: 'Nike Air 10'
})

  return (
    <View>
        <Text>Page Detail</Text>
    </View>
  );
}