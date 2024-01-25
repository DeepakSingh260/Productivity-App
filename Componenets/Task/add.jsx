
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { List, FAB,Icon } from 'react-native-paper';
import { useState, useEffect } from 'react';
import TaskForm from './taskform';


const AddTask = () => {
    const [tasks, setTasks] = useState([]);
    const [display , setDisplay] =useState(false)

    const handleAddTask = (newTask , startTime  , endTime) => {
        setTasks([...tasks, { id: tasks.length.toString(), task: newTask , startTime:startTime , endTime:endTime}]);
        setDisplay(false)
    };
    const renderItem = ({ item }) => (
      <List.Item
      title={item.task}
      description={`${item.startTime} - ${item.endTime}`}
      style={styles.item}
    />
    );

    return (
        <View style={styles.container}>
          {
            display?
            (<TaskForm onAddTask={handleAddTask} />)
            :<></>
          }
            <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />

      <FAB
          icon= 'plus'          
          style={styles.fab}
          color = 'white'
          onPress={() => setDisplay(!display)}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor:'#2c4699'
    },
    item:{
      borderWidth: 1, // Border width
      borderColor: '#000', // Border color
      padding: 10, 
      borderRadius:10,
      margin:5,
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }
  });
export default AddTask;