import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

const SecondScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const goToFinishScreen = () => {
    if (name.trim()) {
      setIsNameValid(true);
      navigation.navigate('Finish', { name });
    } else {
      setIsNameValid(false);
    }
  };
  return (
<SafeAreaView className='bg-bg h-full m'>       
 <View className='bg-coral h-[250px] items-center pt-5'>
        <Image 
        style={{height: 250, width: 250}}
        source={require('../../assets/check.png')}
        />
        </View>

        <View className='pt-12 mx-5 mb-4' >
            <Text className='text-white text-3xl pt-6 mx-5  '>1. Ok primeiro, como posso te chamar? </Text>
            <TextInput
  type='text'
  className='bg-white text-bg h-12 mx-4 rounded-full mt-12 px-4'
  onChangeText={(text) => {
    setName(text);
    setIsNameValid(true);
  }}
/>
{!isNameValid && <Text style={{ color: 'red', marginLeft: 30, marginTop: 5}}>Campo obrigatório</Text>}

        </View>

        <TouchableOpacity className='bg-white rounded-xl p-4 text-center mt-12 flex flex-row justify-between items-center mx-12' onPress={goToFinishScreen}>
  <Text className='text-lg text center'>Continuar</Text>
  <Ionicons name='arrow-forward' size={24}/> 
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default SecondScreen