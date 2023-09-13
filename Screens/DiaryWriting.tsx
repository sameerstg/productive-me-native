import { StyledComponent } from 'nativewind'
import React from 'react'
import { SafeAreaView,TextInput } from 'react-native'

function DiaryWriting() {
    return (
        <SafeAreaView>
            <StyledComponent component={TextInput} className="font-bold text-2xl container p-4 bg-[#43434317] rounded" placeholder='Enter title' />
            <StyledComponent component={TextInput} className="font-bold text-2xl container  p-4 bg-[#43434317] rounded " multiline={true} placeholder='Enter Diary' />
        </SafeAreaView>
    )
}

export default DiaryWriting