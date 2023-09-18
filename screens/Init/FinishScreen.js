import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const FinishScreen = ({navigation, route}) => {
    const { name } = route.params;    
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goToLetsStartScreen = () => {
    navigation.navigate('LetsStart', {name}); 
  };
  return (
<SafeAreaView className='bg-bg h-full m'>       
 <View className='bg-coral h-[250px] items-center pt-5'>
        <Image 
        style={{height: 280, width: 280}}
        source={require('../../assets/time.png')}
        />
        </View>

        <View className='pt-12 mx-5 mb-4' >
            <Text className='text-white text-3xl pt-6 mx-5 '>2. Que horas você acorda geralmente?</Text>
            <TextInput type='text' className='bg-white text-bg h-10 mx-4 rounded-full mt-12 px-2'/>
        </View>

        <TouchableOpacity className='bg-white rounded-xl p-4 text-center mt-12 flex flex-row justify-between items-center mx-12' onPress={goToLetsStartScreen}>
  <Text className='text-lg text center'>Continuar</Text>
  <Ionicons name='arrow-forward' size={24}/> 
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default FinishScreen