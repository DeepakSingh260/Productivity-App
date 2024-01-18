import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import Colors from '../accessories/colors';
const Task = ({navigation}) => {
    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.text}>Add tasks</Text>
        </View>
    )
}
const styleSheet = StyleSheet.create({
    container:{
      backgroundColor: Colors.BackgroundColor,
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    text: {
      color: Colors.PrimaryColor, // Use the defined color
      fontSize: 20,
    },
    secondaryText:{
      color: Colors.SecondaryColor, // Use the defined color
      fontSize: 20,
    }
  })
export default Task