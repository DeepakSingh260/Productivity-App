import { View, Text, StyleSheet } from "react-native"
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from 'react-native';
const WeekProgress = () =>{
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: [50, 60, 70, 100,null,null,null], // Example data for the week
          },
        ],
      };
    return (
        <View style={style.container}>
            <Text style={style.text}>Here is how your Week Looks</Text>
            <BarChart
                data={data}
                width={Dimensions.get('window').width - 30}
                height={200}
                yAxisLabel=""
                chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 2) => `rgba(84, 122, 247, ${opacity})`,
                labelColor: (opacity = 2) => `rgba(35, 49, 97, ${opacity})`,
                style: {
                    borderRadius: 26,
                    elevation:5
                },
                
                }}
                // style={styles.graphStyle}
            />
        </View>
    )
}

const style = StyleSheet.create(
    {
        text : {
            fontSize:18
        },
        container:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderWidth: 1, // Border width
            borderColor: '#000', // Border color
            padding: 10,
            borderRadius:10
        }

    }
)

export default WeekProgress;