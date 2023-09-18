import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';


const LetsStartScreen = ({navigation, route}) => {
    const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goToHome = () => {
    navigation.navigate('Home', {name}); 
  };
  return (
<SafeAreaView className='bg-bg h-full m'>       
 <View className=' items-center pt-5'>
        <Image 
        style={{height: 300, width: 300}}
        source={require('../../assets/lets.png')}
        />
        </View>

        <View className='pt-12 '>
        <Text className='text-white text-center text-xl'>Agora sim 
        </Text>
        <Text className='text-white text-center text-xl font-bold'>
        Você está pronto! </Text>
        <Image  
           className='mx-auto '
           style={{height: 60, width: 60}}
           source={require('../../assets/yellow.png')}
        />
        <Text className='text-white text-center text-md font-light py-2 mx-auto px-5'> 
        Ok, agora você está pronto para
        construir uma rotina. 
        </Text>
</View>

        <TouchableOpacity className='bg-white rounded-xl p-4 text-center mt-12 flex flex-row justify-between items-center mx-12' onPress={goToHome}>
  <Text className='text-lg text center'>Começar</Text>
  <Ionicons name='arrow-forward' size={24}/> 
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default LetsStartScreen