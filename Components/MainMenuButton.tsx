import { Link, router } from 'expo-router';
import React from 'react'
import { Pressable, Text } from 'react-native'
import tw from 'twrnc'
interface props{
  title:string;
  href:string;
}
const MainMenuButton = (props:props)=> {
  return (
      <Pressable
      style={tw`w-2/4 py-2 my-5 bg-cyan-400 items-center rounded-2xl`}
      className="w-2/4 py-2 my-5 bg-cyan-400 items-center rounded-2xl" 
        onPress={() => { 
          console.log(props.title) ; 
          
        }}>
        <Text className='font-bold text-lg '>{props.title}</Text>
      </Pressable>
  )
}

export default MainMenuButton