import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import Colors from '../accessories/colors';
import AddTask from '../Componenets/Task/add';
const Task = ({navigation}) => {
    return (
        <View style={styleSheet.container}>
            
            <AddTask/>
        </View>
    )
}
const styleSheet = StyleSheet.create({
    container:{
      backgroundColor: Colors.BackgroundColor,
      flex: 1, 
    }
  })
export default Task