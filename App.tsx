import { StyledComponent } from 'nativewind';
import {  Alert, Button, Pressable, SafeAreaView, Text } from 'react-native';
import { styled } from 'nativewind';
const StyledView = styled(SafeAreaView)
const StyledText = styled(Text)
export default function App() {
  
  return (
    
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-500">
        <StyledView  className="container py h-12 justify-center bg-slate-300 items-center">
      <StyledText className="text-slate-800">Try resizing me! 🎉</StyledText>
    </StyledView>
    </SafeAreaView>
  );
}

