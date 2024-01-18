import { Text, View, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native"
import { useState } from "react";
import Colors from "../../accessories/colors";
const UpcomingTask = () =>{
    const [scaleValue] = useState(new Animated.Value(1));
    const animatedStyle = {
        transform: [{ scale: scaleValue }],

      };
    const handlePressIn = () => {
    Animated.spring(scaleValue, {
        toValue: 1.3, // Adjust the magnification level as needed
        useNativeDriver: true,
    }).start();
    };

    const handlePressOut = () => {
    Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
    }).start();
    };
    
    return (
        <>
    <View style={styles.container}>
        <Text style={styles.heading_text}>Upcoming Task</Text>
    </View>
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} >
        <Animated.View key={1}  style={[styles.taskContainer, animatedStyle ]}>
            <Text style={styles.taskTitle}>LeetCode Daily Question</Text>
            <Text style={styles.taskTime}>10:00 AM</Text>
        </Animated.View>
    </TouchableWithoutFeedback >
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} >
        <Animated.View key={2}  style={[styles.taskContainer, animatedStyle ]}>
            <Text style={styles.taskTitle}>Learn React Native</Text>
            <Text style={styles.taskTime}>1:00 PM</Text>
        </Animated.View>
    </TouchableWithoutFeedback >
    </>
    )
}
const styles = StyleSheet.create({
    container: {
      borderWidth: 1, 
      borderColor: '#000', 
      padding: 10, 
      borderRadius: 8, 
      display:'flex',
      alignItems:'center',
      backgroundColor: Colors.HeadingBackgroundColor,
      width: '90%'
    },
    heading_text: {
      fontSize: 20,
      color:'#fff',
      
    },
    taskContainer: {
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 2,
        display:'flex',
        alignItems:'center',
        width: '90%'
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    taskTime: {
        color: '#666',
    },
    
  })

export default UpcomingTask;