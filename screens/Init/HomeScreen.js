import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
 

const HomeScreen = ({navigation,  route}) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  function formatarDataParaString(data) {
    const diasDaSemana = [
      'Domingo', 'Segunda-feira', 'Terça-feira',
      'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
  
    const meses = [
      'Jan', 'Fev', 'Mar', 'Abr',
      'Mai', 'Jun', 'Jul', 'Ago',
      'Set', 'Out', 'Nov', 'Dez'
    ];
  
    const diaDaSemana = diasDaSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
  
    return { diaDaSemana, dia, mes, ano };
  }
  
  const currentDate = new Date();
  const { diaDaSemana, dia, mes, ano } = formatarDataParaString(currentDate);
  
  
  useEffect(() => {
 
    if (isChecked) {
      
      console.log('Checkbox marcado');
    } else {
      console.log('Checkbox desmarcado');
    }
  }, [isChecked]);

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((item) =>
      item.id === taskId ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView  className='bg-bg h-full'>
      <View className='mx-6 pt-12 mt-8'>
      <View style={styles.inputContainer} className='mx-2 '>
        <TextInput
        className='bg-gray p-4 w-full rounded-lg text-black'
          placeholder="Gerar Rotina"
          placeholderTextColor={'rgba(15, 14, 23, 0.40)'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask} className='items-center'>
          <Text className='text-gray text-center text-xl p-2'>+</Text>
        </TouchableOpacity>
      </View>
      <Text className='text-orange text-5xl pt-8'>Olá, </Text>
      <Text className='text-orange text-5xl font-bold'>{name} </Text>

      <Text className='text-gray pt-4 text-semibold text-xl'>{diaDaSemana}</Text>
      <Text className='text-gray text-light text-md'>{mes} {dia} , {ano}</Text>


      <FlatList
      className='mt-6 '
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer} className='bg-coralLight px-2 pt-5 pb-4 rounded-xl'>
   <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer} >
      {isChecked ? (
        <Ionicons name="checkmark-circle" size={24} color="gray" />
      ) : (
        <Ionicons name="radio-button-off" size={24} color="gray" />
      )}
    </TouchableOpacity>
      <Text
              style={[
                styles.taskText,
                { textDecorationLine: item.completed ? 'line-through' : 'none' },
              ]}
            >
              {item.text}
            </Text>
            <TouchableOpacity
              onPress={() => handleDeleteTask(item.id)}
            >
              <Ionicons name='trash' size={20}/>
            </TouchableOpacity>
          </View>
        )}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
