import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,FlatList,Image,ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import Product from './Products';

const proudectdetails = (props) => {
    //console.log('props:'+JSON.stringify(props.route.params.product))
    const Product = props.route.params.product
    console.log(Product);

    return(
        <View style={styles.container}>
            <ScrollView>    
                <View style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.titleFont}>{Product.productName}</Text>
                </View>
                <View style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.regularFont}>{Product.productPrice}₪</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.regularFont}>{Product.productDescription}</Text>
                </View>
                <View style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{width: 300, height: 200, borderRadius:10}} 
                        source={{uri:Product.imageUrl}}         
                    />
                </View>
            </ScrollView>
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
    scrollView:{
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
        marginTop:100,
        fontFamily:'AppleSDGothicNeo-Bold',
        fontSize:40,
    },
    regularFont:{
        fontFamily:'AppleSDGothicNeo-Bold',
        fontSize:20
    }
  });

  export default proudectdetails;
