import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [endTime , setStartTime] = useState(null);
  const [startTime , setEndTime] = useState(null);
  const [ isStartTimePickerAvailable , setStartTimePickerAvailable] = useState(false);
  const [ isEndTimePickerAvailable , setEndTimePickerAvailable] = useState(false);


  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task , startTime , endTime);
      setTask('');
    }
  };

  const showStartTimePicker = () => {
    setStartTimePickerAvailable(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerAvailable(false);
    
  };
  const showEndTimePicker = () => {
    setEndTimePickerAvailable(true);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerAvailable(false);
    
  };

  const handleConfirmStartTime = (time) => {

    setEndTime(time.toTimeString().split(' ')[0]);
    hideStartTimePicker();
    Keyboard.dismiss();
  };
  const handleConfirmEndTime = (time) => {

    setStartTime(time.toTimeString().split(' ')[0]);
    hideEndTimePicker();
    
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Task"
        value={task}
        onChangeText={(text) => setTask(text)}
        
        style={styles.input}
      />
      <View style={{display:'flex' , flexDirection:'row'}}>
      <TextInput placeholder="Disabled TextInput"
        editable={false} onPressIn={showStartTimePicker} style={styles.textInput} value={startTime} label='Start Time'/>
      <TextInput placeholder="Disabled TextInput"
        editable={false} onPressIn={showEndTimePicker} style={styles.textInput} value={endTime} label='End Time'/>
      </View>
      <Button mode="contained" onPress={handleAddTask} style={styles.button} >
        Add Task
      </Button>
      <DateTimePickerModal
        isVisible={isStartTimePickerAvailable}
        mode="time"
        onConfirm={handleConfirmStartTime}
        onCancel={hideStartTimePicker}
        textColor='#000'
      />
      <DateTimePickerModal
        isVisible={isEndTimePickerAvailable}
        mode="time"
        onConfirm={handleConfirmEndTime}
        onCancel={hideEndTimePicker}
        textColor='#000'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1, // Border width
    borderColor: '#000', // Border color
    borderRadius: 8,
  },
  input: {
    marginBottom: 16,
  },
  textInput: {
    marginTop: 8,
    margin:8,
    marginBottom: 16,
    flex:1,
    // width:'45%'
  },
  button:{
    height:'20%',
    display:'flex',
    justifyContent:'center',
    
  }
});

export default TaskForm;
