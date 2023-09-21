import { SafeAreaView} from 'react-native';
import MainMenu from './Screens/MainMenu';
import DiaryWriting from './Screens/DiaryWriting';
import DiaryHistory from './Screens/DiaryHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
    // <MainMenu/>
    // <DiaryWriting/>
    // <DiaryHistory/>
  );
}

