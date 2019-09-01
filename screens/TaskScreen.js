import React from 'react';
import { Text, View,TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';


import HomeScreen from './HomeScreen';
import Task from  '../objects/Task';

class TaskScreen extends React.Component {

    static navigationOptions = {
        headerTitle:(
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Adding Task...</Text>
            </View>
        ),
    }

    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            dueDate: new Date(),
            amount: '',
            submittedDate: new Date(),
        }
    }

    processTaskSubmission(newTask){       
        console.log("Process task submission");

        newTask.submittedDate = new Date();
        this.props.navigation.navigate('HomeScreen',{newTask: newTask});
    }

    render(){

        return (
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Title: </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="e.g. do homework"
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.text}
                />

                <Text>Description: </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="e.g. revise chemistry"
                    onChangeText={(description) => this.setState({description})}
                    value={this.state.description}
                />

                <Text>To be done by: </Text>
                <DatePicker 
                    date={this.state.dueDate}    
                    onDateChange={dueDate => this.setState({dueDate})}
                />

                <Text>Pledging amount: </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="How much do you value this task?"
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

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#2196F3',
        height: 50,
        width: 500,
        alignSelf: 'stretch',
        textAlign: 'center',
      },
})

export default TaskScreen;

