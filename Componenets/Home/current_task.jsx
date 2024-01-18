import { Text, View, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native"
import { useState, useEffect, useRef } from "react";
import Colors from "../../accessories/colors";
const CurrentTask = () =>{
    
    const scaleValue = useRef(new Animated.Value(1)).current
    const animatedStyle = {
        transform: [{ scale: scaleValue }],

      };
      

    useEffect(() => {
    const pulseAnimation = Animated.loop(
        Animated.sequence([
        Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }),
        ]),
    );

    pulseAnimation.start();

    return () => {
        pulseAnimation.stop();
    };
    }, [scaleValue]);
    

    return (
        <>
    <View style={styles.container}>
        <Text style={styles.heading_text}>Current Task</Text>
    </View>
    <TouchableWithoutFeedback  >
        <Animated.View key={1}  style={[styles.taskContainer, animatedStyle ]}>
            <Text style={styles.taskTitle}>Increasing ShareHolders Profits</Text>
            <Text style={styles.taskTime}>00:00 AM - 23:59 PM</Text>
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

export default CurrentTask;