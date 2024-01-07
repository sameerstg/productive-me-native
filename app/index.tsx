import { Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native';
export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Redirect href='/menu/moneymanager/moneywriting'></Redirect>
    </SafeAreaView>
  );
}

