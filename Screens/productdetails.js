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
               <Text style={styles.titleFont}>{Product.productName}</Text>
           </View>
           <View>
               <Text style={styles.regularFont}>{Product.productPrice}₪</Text>
           </View>
           <View style={styles.description}>
               <Text style={styles.regularFont}>{Product.productDescription}</Text>
           </View>
           <View>
               <Image
                  style={{width: 300, height: 400, borderRadius:10}} 
                  source={{uri:Product.imageUrl}}         
               />
           </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#990fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    description:{
        backgroundColor: '#0099ff',
        borderRadius:10,
        margin:20,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        shadowOpacity:10
    },
    titleFont:{
        fontFamily:'impact',
        fontSize:50,
    },
    regularFont:{
        fontFamily:'impact',
        fontSize:20
    }
  });

  export default proudectdetails;
