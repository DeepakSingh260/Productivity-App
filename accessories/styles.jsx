import { StyleSheet } from "react-native";
import Colors from "./colors";
const TemplateStyleSheet = StyleSheet.create({
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
export default TemplateStyleSheet;
