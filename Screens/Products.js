import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const proudect = (props) => {
console.log('props:'+JSON.stringify(props.route.params.productsList.products))
const productsList = props.route.params.productsList.products
    return(
        <View style={styles.container}>
            <FlatList 
                data={productsList}
                keyExtractor={item => item.id}
                renderItem={Proudect => 
                <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('Proudectdetails',{product:Proudect.item})}}>
                <View>
                  <Text>
                    {Proudect.item.productName}
                  </Text>   
                  <Text>
                    {Proudect.item.productPrice}
                  </Text> 
                </View>
                </TouchableOpacity>
                }
            />
            
        </View>
    )
//imageUrl
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
        margin:20,
        width:200,
        height:50,
        borderRadius:10,
        backgroundColor:'#ff0099',
        alignItems:'center',
        justifyContent:'center'
    }
  });

  export default proudect;
