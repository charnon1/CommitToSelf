import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class DisplayCardScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            task: undefined,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('display card screen...');
       if(nextProps.navigation.getParam("item") != undefined){
            console.log(nextProps.navigation.getParam("item"));
            return{
                task: nextProps.navigation.getParam("item")
            }
       }

       return null;
    }

    render(){

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Due in: </Text>
                <Text>Title: {this.state.task.title}</Text>
                <Text>Description: {this.state.task.description}</Text>
                <Text>Due Date: {this.state.task.dueDate}</Text>
                <Text>Amount Pledge: {this.state.task.amount}</Text>
                
            </View>
        );
    }
}

export default DisplayCardScreen;

