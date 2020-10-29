import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

export default function App() {
   
  const [list,setList]=useState([])

  const [fullName,setName]=useState('')

  const  val=(enteredText)=>{
    const name = (enteredText.nativeEvent.text)
    setName(name)
    console.log(fullName)
   

  }

  const add=()=>{
    const newList=[...list]
    newList.push(fullName)
    setList(newList)
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{marginTop:200}}>
       <TextInput onChange={val} style={{borderWidth:1,maxWidth:200,minWidth:200,height:40,borderRadius:10}} placeholder=' Enter Name'/>
       <TouchableOpacity onPress={add} style={{backgroundColor:'green',height:40,width:80,borderRadius:10,marginLeft:60,marginTop:10}}>
         <Text style={{color:'white',marginTop:9,marginLeft:20}}>
           ADD
         </Text>
       </TouchableOpacity>
       <View style={{marginTop:30}}>
         {list.map(function(item){
           return(
           <Text>{item}<TouchableOpacity style={{backgroundColor:'blue',height:40,width:80,borderRadius:10,marginLeft:60,marginTop:10}}><Text style={{color:'white',marginTop:9,marginLeft:20}}>Delete</Text></TouchableOpacity></Text>
          
           )
         })}
       </View>
       </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
