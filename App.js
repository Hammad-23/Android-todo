import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

export default function App() {
   
  const [list,setList]=useState([])

  const [fullName,setName]=useState('')
  const [update,setUpdate] = useState(false)

  const [add,setAdd] = useState(true)
  const [editedindex,setEditedindex] = useState('')
  

  const  val=(enteredText)=>{
    const name = (enteredText.nativeEvent.text)
    setName(name)
    console.log(fullName)
    
   

  }

  const aadd=()=>{
    const newList=[...list]
    newList.push(fullName)
    setList(newList)
    
  }

  const deleteItem = function(index){

    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)


  }

  const editItem = function(index){
    setAdd(false)
    const newList = [...list]
    setName(fullName)
    
    // console.log(index)
    // const newEdited = [...editedindex]
    setEditedindex(index) 
    console.log(editedindex)
    const edit = newList[index]
    setName(edit)
    setUpdate(true)
    
   

  }


  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{marginTop:200}}>
       <TextInput  onChange={val} style={{borderWidth:1,maxWidth:200,minWidth:200,height:40,borderRadius:10}} placeholder=' Enter Name'/>
       <TouchableOpacity onPress={aadd} style={{backgroundColor:'green',height:40,width:80,borderRadius:10,marginLeft:60,marginTop:10}}>
         <Text style={{color:'white',marginTop:9,marginLeft:20}}>
           ADD
         </Text>
       </TouchableOpacity>
       <View style={{marginTop:30}}>
         {list.map(function(item,index){
           return(
           <Text style={{fontSize:20}}>{item}<TouchableOpacity onPress={() => deleteItem(index)} style={{backgroundColor:'blue',height:40,width:80,borderRadius:10,marginLeft:60,marginTop:10}}><Text style={{color:'white',marginTop:9,marginLeft:20}}>Delete</Text></TouchableOpacity>
           <TouchableOpacity onPress={() =>editItem(index)} style={{backgroundColor:'red',height:40,width:80,borderRadius:10,marginLeft:60,marginTop:10}}><Text style={{color:'white',marginTop:9,marginLeft:20}}>Edit</Text></TouchableOpacity>
           </Text>
          
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
