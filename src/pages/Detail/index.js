import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

export default function Detail({ navigation }) {
 
  navigation.setOptions({
    headerTitle: 'Nike Air 10'
  })

  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
        />
        <Text>Page Detail</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container:{

    },
    image:{

    }
});