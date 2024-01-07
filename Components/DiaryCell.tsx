import React from 'react'
import {  Text, View } from 'react-native'
import tw from 'twrnc'
type Diary={
    id:number;
    date : string;
    title:string;
    content:string;

}
function DiaryCell( prop:Diary) {
  return (
    <View style={tw`flex flex-row w-full items-stretch bg-gray-400`}>
        
        <Text style={tw`p-1 text-center border w-1/5 text-center`}>{prop.date}</Text>
        <Text style={tw`p-1 border w-[30%]`}>{prop.title}</Text>
        <Text style={tw`p-1 border w-[50%]`}>{ prop.content}</Text>
       
    </View>
  )
}

export default DiaryCell

