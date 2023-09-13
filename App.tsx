import { SafeAreaView} from 'react-native';
import MainMenuButton from './Components/MainMenuButton';

export default function App() {

  return (

    <SafeAreaView className="flex-1 h-screen items-center  justify-center bg-slate-500">

      <MainMenuButton href='./Screens/DiaryWriting' title='Diary'/>
      <MainMenuButton href='./Screens/DiaryWriting' title='Money Manager'/>
      
        
      

    </SafeAreaView>
  );
}

