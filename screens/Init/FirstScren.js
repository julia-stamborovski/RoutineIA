import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';


const FirstScren = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goToSecondScreen = () => {
    navigation.navigate('Second');
  };
  return (
    <SafeAreaView className='bg-bg h-full'>
        <StatusBar style='light' />
        <View className='text-center mx-auto pt-5'>
        <Image 
        style={{height: 300, width: 300}}
        source={require('../../assets/Waiting.png')}
        />
<View className='pt-12 '>
        <Text className='text-white text-center text-xl'>É hora de construir uma 
        </Text>
        <Text className='text-white text-center text-xl font-bold'>
        rotina extraordinária</Text>

</View>
<TouchableOpacity className='bg-white rounded-xl p-4 text-center mt-12 flex flex-row justify-between items-center' onPress={goToSecondScreen}>
  <Text className='text-lg text center'>Continuar</Text>
  <Ionicons name='arrow-forward' size={24}/> 
</TouchableOpacity>
      </View>


   
    </SafeAreaView>
  )
}

export default FirstScren