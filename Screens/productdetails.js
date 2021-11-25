import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList,Image} from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Product from './Products';

const proudectdetails = (props) => {
    //console.log('props:'+JSON.stringify(props.route.params.product))
    const Product = props.route.params.product
    console.log(Product);

    return(
        <View style={styles.container}>
           <View>
               <Text>{Product.productName}</Text>
           </View>
           <View>
               <Text>{Product.productPrice}</Text>
           </View>
           <View>
               <Text>{Product.productDescription}</Text>
           </View>
           <View>
               <Image
                  style={{width: 300, height: 400}} 
                  source={{uri:Product.imageUrl}}         
               />
           </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff0',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
  });

  export default proudectdetails;
