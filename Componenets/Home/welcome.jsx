import { StyleSheet, Text, View } from "react-native"
import TemplateStyleSheet from "../../accessories/styles"
import Colors from "../../accessories/colors"
import { ProgressChart } from "react-native-chart-kit"
import { Dimensions } from "react-native"
const PieChartComponent = () =>{
    const data = {
        labels: [""], // optional
        data: [0.4]
    };
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: Colors.HeadingBackgroundColor,
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: Colors.HeadingBackgroundColor,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false
      };
    
    return (
        <View style={style.pieChartContainer}> 
            <ProgressChart
                data={data}
                width={screenWidth/2}
                height={110}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
                
            />
        </View>
    )

}
const Welcome = () =>{
    return (
        <View style={style.container}>
            <View style={style.textView}> 
                <Text style={[style.text ]}> Welcome, </Text>
                <Text style={style.text}>Deepak</Text>
            
                
            </View>
            <View >
            <Text style={style.text}>Here's your Progress </Text>
            <PieChartComponent/>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:150,
        borderWidth: 1, // Border width
        borderColor: '#000', // Border color
        padding: 10, // Padding around the text
        borderRadius: 8,
        backgroundColor: Colors.HeadingBackgroundColor,
        marginBottom:5,
        display:'flex',
        alignItems:'center',
        width: '90%'
    },
    text:{
        color:'#fff',
        fontSize:23,
        fontFamily:'Arial'
    },
    textView: {
        flex: 1, // Take up available space
        
        justifyContent:'center',
        alignItems:'center'
      },
    pieChartContainer: {
        flex: 1, // Take up available space
        padding: 8,
        alignItems:'center',
        marginBottom:5
      },
})
export default Welcome;