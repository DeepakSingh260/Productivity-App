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

      <TextInput placeholder="Disabled TextInput"
        editable={false} onPressIn={showStartTimePicker} style={styles.button} value={startTime} label='Start Time'/>
      <TextInput placeholder="Disabled TextInput"
        editable={false} onPressIn={showEndTimePicker} style={styles.button} value={endTime} label='End Time'/>
      <Button mode="contained" onPress={handleAddTask} style={styles.button}>
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
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    marginBottom:8
  },
});

export default TaskForm;
