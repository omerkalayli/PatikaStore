import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
    image: {
        borderRadius: 5,
        width: Dimensions.get("window").width / 2.5, 
        height: Dimensions.get("window").height / 4,
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 10
    },    
    lastImage: {
        borderRadius: 5,
        width: Dimensions.get("window").width / 2.5, 
        height: Dimensions.get("window").height / 4,
        resizeMode: "stretch",
        alignSelf: "center",
        marginTop: 15,
        marginBottom: 10
    },   
    lastView: {
        margin: 15,
        borderRadius: 5,
        backgroundColor: "white"
    },
    text: {
        fontWeight: "bold",
        color: "black",
        marginBottom: 5,
    },
    price: {
        fontWeight: "bold",
    },
    textContainer: {
        textAlign: "left",
        marginLeft: 15,
    },
    productCard: {
        width: Dimensions.get("window").width / 2 - 12, 
        height: Dimensions.get("window").height / 2.5,
        backgroundColor: "#dddddd",
        margin: 5,
        borderRadius: 5,
    },
    lastProductCard: {
        width: Dimensions.get("window").width - 15, 
        height: Dimensions.get("window").height / 2.5,
        backgroundColor: "#dddddd",
        margin: 5,
        borderRadius: 5,
    },
    stock: {
        fontWeight: "bold",
        color: "red",
        marginTop: 5
    }
}
)