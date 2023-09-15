import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import DiaryCell from '../Components/DiaryCell'

const demoDiaries = [

{date:"1/2/2023",title:"title",content:"content"}

];

const DiaryHistory = () => {
  return (
    <SafeAreaView className='flex-1 items-center'>
        <ExpoStatusBar />
        <Text className='text-2xl font-bold'>Diary History</Text>
        {demoDiaries.map((d,i)=>

            <DiaryCell key={i}  />

        )}
    </SafeAreaView>
  )
}
export default DiaryHistory
