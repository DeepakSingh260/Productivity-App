
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { List, FAB, } from 'react-native-paper';
import { useState, useEffect } from 'react';
import TaskForm from './taskform';
import { Button } from 'react-native-elements';
import Colors from '../../accessories/colors';
import Swipeout from 'react-native-swipeout';

const AddTask = () => {
    const [tasks, setTasks] = useState([]);
    const [display , setDisplay] =useState(false)

    const handleAddTask = (newTask , startTime  , endTime) => {
        setTasks([...tasks, { id: tasks.length.toString(), task: newTask , startTime:startTime , endTime:endTime}]);
        setDisplay(false)
    };
    const renderSwipe = () =>[
      {
        text:'Delete',
        backgroundColor:'#f03c18',
        
      }
    ]
    const renderItem = ({ item }) => (
      <Swipeout autoClose={true} right={renderSwipe()} style={{backgroundColor:'transparent'}} >
      <View style={styles.item}>      
      <List.Item
      title={item.task}
      description={`${item.startTime} - ${item.endTime}`}
      titleStyle={{fontSize:22}}
      descriptionStyle={{fontSize:18}}
      
    />
      <Button title={"edit"} style={{backgroundColor:Colors.HeadingBackgroundColor ,borderColor:Colors.HeadingBackgroundColor , borderWidth:2 ,  borderRadius:10 }} titleStyle={{fontSize:22 }} />
      </View>
      </Swipeout>

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
                   
          style={styles.fab}
          color = 'white'
          label='+'
          
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
      backgroundColor:Colors.HeadingBackgroundColor ,
      fontSize:22,
      fontWeight:'bold'
    },
    item:{
      borderWidth: 1, // Border width
      borderColor: '#000', // Border color
      padding: 10, 
      borderRadius:10,
      marginBottom:5,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%', 
      flexDirection:'row' , 
      alignItems:'center',
      backgroundColor:'#fff'
      
    }
  });
export default AddTask;