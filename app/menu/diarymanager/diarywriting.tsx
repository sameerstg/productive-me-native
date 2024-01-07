import { StyledComponent } from 'nativewind'
import React from 'react'
import { SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native'

import tw from 'twrnc'
function DiaryWriting() {
    return (
        <SafeAreaView >
            <StatusBar ></StatusBar>

            <View style={tw`flex-row items-center bg-cyan-600 h-16`} >
                <StyledComponent onPress={() => { console.log("cancel") }} component={Text} className='bg-green-300 h-8 w-1/12 py-2 rounded-md  text-center mx-auto flex'>
                    ❌
                </StyledComponent>

                <StyledComponent onPress={() => { console.log("tick") }} component={Text} className='bg-green-300 h-8 w-1/12 py-2 rounded-md  text-center mx-auto flex'>
                    ✔
                </StyledComponent>
            </View>


            <StyledComponent component={TextInput} className="underline italic font-bold text-2xl container p-4  rounded" placeholder='Enter title' />
            <SafeAreaView className='bg-black h-[1px]'>

            </SafeAreaView>
            <StyledComponent component={TextInput} className="font-bold text-xl container  p-4  rounded " multiline={true} placeholder='Type Your Story....' />
        </SafeAreaView>
    )
}

export default DiaryWriting