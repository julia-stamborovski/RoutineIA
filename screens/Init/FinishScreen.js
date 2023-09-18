import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const FinishScreen = ({navigation, route}) => {
    const { name } = route.params;
    const [horaAcorda, setHoraAcorda] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);


    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || horaAcorda;
      setShowPicker(Platform.OS === 'ios'); 
      setHoraAcorda(currentDate);
    };

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
            <View className='bg-coralLight mt-3 rounded-md items-center p-3'>
             <DateTimePicker
          testID="dateTimePicker"
          value={horaAcorda}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
          themeVariant="light" //ios
        />
        </View>
        </View>

        <TouchableOpacity className='bg-white rounded-xl p-4 text-center mt-12 flex flex-row justify-between items-center mx-12' onPress={goToLetsStartScreen}>
  <Text className='text-lg text center'>Continuar</Text>
  <Ionicons name='arrow-forward' size={24}/> 
</TouchableOpacity>
    </SafeAreaView>
  )
}

export default FinishScreen