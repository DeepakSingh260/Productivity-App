import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import Colors from '../accessories/colors';
import AddTask from '../Componenets/Task/add';
import { PaperProvider } from 'react-native-paper';
const Task = ({navigation}) => {
    return (
      <PaperProvider>
        <View style={styleSheet.container}>
            <AddTask/>
        </View>
        </PaperProvider>
    )
}

const styleSheet = StyleSheet.create({
    container:{
      backgroundColor: Colors.BackgroundColor,
      flex: 1, 
    }
  })
export default Task