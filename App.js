import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, View } from "react-native";
import patistore_data from "./src/patistore.json"
import ProductCard from "./src/ProductCard/ProductCard";
import { SearchBar } from "react-native-elements";

function App () {

  const headerComponent = () => {
    return(
      <View style={styles.headerView}>
        <Text style={styles.header}>PATIKASTORE</Text>
        <SearchBar 
          placeholder="Ara..." 
          round={true} 
          lightTheme={true} 
          searchIcon={false}
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
    )
  };

  const products = ({item}) => <ProductCard product={item} /> 
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={patistore_data}
        renderItem={products}
        numColumns={2}
        style={styles.flatList}
      />

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  flatList: {
    backgroundColor: "white",
    margin: 2
  },
  header: {
    color: "#a301a5",
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "white",
    margin: 10
  },
  searchBar: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "white",
  },
  inputContainerStyle: {
    backgroundColor: "#dddddd"
  }
})

export default App;
