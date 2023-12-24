import React from 'react'
import { SafeAreaView } from 'react-native'
import MainMenuButton from '../../Components/MainMenuButton'

function MainMenu() {
  return (
   
    <SafeAreaView className="flex-1 h-screen items-center  justify-center bg-slate-500">

      <MainMenuButton href='./diaryMenu' title='Diary'/>
      <MainMenuButton href='./MoneyMenu' title='Money Manager'/>
      
        
      

    </SafeAreaView>
  )
}

export default MainMenu