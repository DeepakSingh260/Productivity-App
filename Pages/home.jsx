import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';
import Colors from '../accessories/colors';
import UpcomingTask from '../Componenets/Home/upcoming_task';
import Welcome from '../Componenets/Home/welcome';
import CurrentTask from '../Componenets/Home/current_task';
import WeekProgress from '../Componenets/Home/week_progress';
const Home = ({navigation}) => {
    return (
        <View style={styleSheet.container}>
       
        <Welcome/>
        <CurrentTask/>
        <UpcomingTask/>
        <WeekProgress/>
      </View>
    )
}

const styleSheet = StyleSheet.create({
    container:{
      backgroundColor: Colors.BackgroundColor,
      flex: 1, 
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

export default Home