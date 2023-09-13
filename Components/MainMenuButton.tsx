import { Link } from 'expo-router';
import React from 'react'
import { Pressable, Text } from 'react-native'

interface props{
  title:string;
  href:string;
}
const MainMenuButton = (props:props)=> {
  return (
    // <Link href={props.href} asChild>
      <Pressable className="w-2/4 py-2 my-5 bg-cyan-400 items-center rounded-2xl" 
        onPress={() => { console.log(props.title) }}>
        <Text className='font-bold text-lg '>{props.title}</Text>
      </Pressable>
    // </Link>
  )
}

export default MainMenuButton