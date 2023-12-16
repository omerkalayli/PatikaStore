import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./ProductCard.Styles"

const ProductCard = ({product}) => {

  const inStockMsg = () => {
    return product.inStock ? null : 
    <Text style={styles.stock}>
      {"STOKTA YOK"}
    </Text>
  }

  const productStyles = () => {
    return product.id === 10 ? styles.lastProductCard : styles.productCard
  }

  const imageStyles = () => {
    return product.id === 10 ? (
    <View style={styles.lastView}>
      <Image style={styles.lastImage} source={{uri: product.imgURL}}/>
    </View>
    ) : (
      <Image style={styles.image} source={{uri: product.imgURL}}/>
    )
  }

  return(
    <View style= {productStyles()}> 
      {imageStyles()}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {inStockMsg()}
      </View>
    </View>
  )
}

export default ProductCard;