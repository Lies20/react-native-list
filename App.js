import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList,} from 'react-native';
import axios from 'axios';


export default function App() {
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const [countries,setCountries] = useState([]);
  const [capital , setCapital] = useState([])

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then(resultat=>{
         console.log("resultat",resultat.data[2].name.common)
         setCountries(resultat.data)
         setCapital(resultat.data)
         console.log("capital",capital)
      })
    },
    [])
  
      
  
      const renderItem=({ item }) => {
      // console.log("item",item)
        return (
        <View>
          <Text>{item.name.common}{item.name.capital}</Text>
        </View>
      );
    }
  return (
    <FlatList data = {countries}
      renderItem ={renderItem}/> 
  );
}

