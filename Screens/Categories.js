import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native';

const Categories = (props) => {

    const store = [
        {
            id: '1004',
            categorieName:'Shoes',
            categorieOrde: 1,
            products: [
                {
                    id:'1',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'2',
                    productName: 'Air Jordan 1 Hi FlyEase',
                    productPrice: 669.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'3',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordans first signature sneaker with a quick and easy 1-handed entry system.There are no laces to tie, just a wraparound zip and 2 straps to secure a custom fit.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'4',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/128849f7-18ce-4cd5-9fc3-29b303d354ef/air-jordan-1-hi-flyease-shoes-9mn2QK.png'
                },
                {
                    id:'5',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                }
            ]
        },
        {
            id: '1005',
            categorieName:'Shirts',
            categorieOrde: 2,
            products: [
                {
                    id:'6',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'7',
                    productName: 'Air Jordan 1 Hi FlyEase',
                    productPrice: 669.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'8',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordans first signature sneaker with a quick and easy 1-handed entry system.There are no laces to tie, just a wraparound zip and 2 straps to secure a custom fit.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'9',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/128849f7-18ce-4cd5-9fc3-29b303d354ef/air-jordan-1-hi-flyease-shoes-9mn2QK.png'
                },
                {
                    id:'10',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                }
            ]
        },
        {
            id: '1006',
            categorieName:'pantes',
            categorieOrde: 3,
            products: [
                {
                    id:'11',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'12',
                    productName: 'Air Jordan 1 Hi FlyEase',
                    productPrice: 669.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'13',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordans first signature sneaker with a quick and easy 1-handed entry system.There are no laces to tie, just a wraparound zip and 2 straps to secure a custom fit.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'14',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/128849f7-18ce-4cd5-9fc3-29b303d354ef/air-jordan-1-hi-flyease-shoes-9mn2QK.png'
                },
                {
                    id:'15',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                }
            ]
        },
        {
            id: '1007',
            categorieName:'accessories',
            categorieOrde: 4,
            products: [
                {
                    id:'15',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'16',
                    productName: 'Air Jordan 1 Hi FlyEase',
                    productPrice: 669.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'17',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordans first signature sneaker with a quick and easy 1-handed entry system.There are no laces to tie, just a wraparound zip and 2 straps to secure a custom fit.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                },
                {
                    id:'18',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/128849f7-18ce-4cd5-9fc3-29b303d354ef/air-jordan-1-hi-flyease-shoes-9mn2QK.png'
                },
                {
                    id:'19',
                    productName: 'Air Jordan XXXVI ',
                    productPrice: 779.90,
                    productDescription: 'Thirty-five models of the Air Jordan and an intuition like no other have led to this moment.Like family members who come before us, the Air Jordan represents a legacy of innate greatness that continues to be built upon.And while each design helps inform the next, the Jordan VI has a special place in the family tree, as it was the sneaker worn by MJ when he won his first of six championships in 1991.Paying homage to the Jordan VI and his six rings, the Air Jordan XXXVI Psychic Energy is an acknowledgement of the Jordan legacy and the extra-sensory perception of those who carry it.',
                    imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb2d0ea9-2665-42af-8581-fd1be4e301ff/air-jordan-xxxvi-psychic-energy-basketball-shoes-0CKrQR.png'
                }
            ]
        }
    ]; 

    console.log(store);
    return(
        <View style={styles.container}>
            <FlatList 
                data={store}
                keyExtractor={item => item.id}
                renderItem={categoriItem => <TouchableOpacity onPress={() => {props.navigation.navigate('Products',{productsList:categoriItem.item})}} >
                    <View style={styles.btn}>
                        <Text style={{fontFamily: 'AppleSDGothicNeo-Bold'}}>
                            {categoriItem.item.categorieName}
                        </Text>
                    </View>
                </TouchableOpacity>}
            />
            
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99ff',
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

  export default Categories;
