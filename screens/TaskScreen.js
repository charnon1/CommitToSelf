import React from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Task from  '../objects/Task';

class TaskScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            dueDate: '',
            amount: '',
        }
    }

    processTaskSubmission(newTask){
       
        console.log("Process task submission");
        this.props.navigation.navigate('HomeScreen',{newTask: newTask});
    }

    render(){

        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Task!</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Title: "
                onChangeText={(title) => this.setState({title})}
                value={this.state.text}
            />

            <TextInput
                style={{height: 40}}
                placeholder="Description: "
                onChangeText={(description) => this.setState({description})}
                value={this.state.description}
            />

            <TextInput
                style={{height: 40}}
                placeholder="Due By: "
                onChangeText={(dueDate) => this.setState({dueDate})}
                value={this.state.dueDate}
            />

            <TextInput
                style={{height: 40}}
                placeholder="amount: "
                onChangeText={(amount) => this.setState({amount})}
                value={this.state.amount}
            />

            <TouchableOpacity onPress={() =>
                    this.processTaskSubmission(new Task(this.state.title, this.state.description, this.state.dueDate, this.state.amount))}>
                <Text>Submit Task</Text>   
            </TouchableOpacity>
        </View>
        );
    }
}

export default TaskScreen;

