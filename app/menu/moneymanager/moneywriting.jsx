import React from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'

function MoneyWriting() {
  return (
    <SafeAreaView>
      <View className="flex-row justify-around">

        <MoneyWritingTypeBar title={'Income'} />
        <MoneyWritingTypeBar title={'Expense'} />
        <MoneyWritingTypeBar title={'Transfer'} />
      </View>

      <View className='flex-row font-bold gap-4 px-2'>
        <Text className=" ">Account Type:</Text>
        <Pressable placeholder='Enter Amount' keyboardType='number-pad'>
          <Text>Select Account</Text>
        </Pressable>
      </View>
      <View className='flex-row font-bold gap-4 px-2'>
        <Text className=" ">Category :</Text>
        <Pressable placeholder='Enter Amount' keyboardType='number-pad'>
          <Text>Select Category</Text>
        </Pressable>
      </View>
      <View className='flex-row font-bold gap-4 px-2'>
        <Text className="py-2 ">Amount :</Text>
        <TextInput placeholder='Enter Amount' keyboardType='number-pad'></TextInput>
      </View>
      <View className='flex-row font-bold gap-4 px-2'>
        <Text className=" ">Category :</Text>
        <Pressable placeholder='Enter Amount' keyboardType='number-pad'>
          <Text>Select Category</Text>
        </Pressable>
      </View>
      <View className='flex-row font-bold gap-4 px-2'>
        <Text className="py-2 ">Note :</Text>
        <TextInput placeholder='Enter Note' ></TextInput>
      </View>
      <View className='flex-row font-bold gap-4 px-2'>
        <Text className="py-2 ">Description :</Text>
        <TextInput placeholder='Enter Description'></TextInput>
      </View>

    </SafeAreaView>
  )
}
function MoneyWritingTypeBar({ title }) {
  return (
    <Pressable className="py-1 ">
      <Text className="font-bold text-xl">{title}</Text>
    </Pressable>
  )
}

export default MoneyWriting