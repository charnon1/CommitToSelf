import React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import 'moment-duration-format';
import CountDown from 'react-native-countdown-component';

class DisplayCardScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            task: undefined,
            dueDateString: '', // for display
            submittedDateString: '', // for display
            timeTillDueDate: '',
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('display card screen...');
       if(nextProps.navigation.getParam("item") != undefined){
            let newTask = nextProps.navigation.getParam("item");
            let dueDate = newTask.dueDate;
            let dueDateMs = dueDate.getTime();

            let currentMs = new Date().getTime();
            let diff = dueDateMs - currentMs ;
            let diffInSeconds = diff / 1000;
            console.log("test: " + moment.duration(diff,"milliseconds").format("h:mm:ss",{trim: false}) );
            return{
                task: newTask,
                dueDateString: moment(dueDate).format("MMMM Do YYYY, h:mm:ss a"),
                timeTillDueDate: diffInSeconds,
            }
       }
       return null;
    }

    processCompletedTask(){
        console.log("Task complete!");
        Alert.alert(
            'Did you complete the task?',
            'You\'re only cheating yourself ;)',
            [
                {text: 'No', onPress: () => console.log("no pressed") },
                {text: 'Yes', onPress: () => this.props.navigation.navigate('HomeScreen', { taskToRemove: this.state.task, newTask: undefined } )},
            ],

        );
    }

    processForfeitTask(){
        console.log("Forfeiting task");
        Alert.alert(
            'Do you want to forfeit this task?',
            'You will lose all the money you pledge if you proceed',
            [
                {text: 'No', onPress: () => console.log("no pressed") },
                {text: 'Yes', onPress: () => this.props.navigation.navigate('HomeScreen', { taskToRemove: this.state.task, newTask: undefined } )},
            ],

        );
    }

    render(){

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{flexDirection: 'column', flex: 1, backgroundColor: 'white', justifyContent:'center'}}>

                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Due In: </Text>
                        <CountDown 
                            until={this.state.timeTillDueDate}
                            // onFinish={()=>alert('Task is due!')}
                            onPress={()=> alert('hello')}
                            size={20}
                        />
                    </View>

                    <View style={{marginVertical:8, borderBottomColor: '#000000', borderBottomWidth: StyleSheet.hairlineWidth}}></View>

                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Title: </Text>
                        <Text>{this.state.task.title}</Text>
                    </View>

                    
                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Description: </Text>
                        <Text>{this.state.task.description}</Text>
                    </View>

    
                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Due Date: </Text>
                        <Text>{this.state.dueDateString}</Text>
                    </View>

                    
                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Amount Pledge ($): </Text>
                        <Text>{this.state.task.amount}</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems:'center', margin:20, justifyContent:'space-between'}}>
                        <Button title="Completed" onPress={() => this.processCompletedTask() } />
                        <Button title="Forfeit Task" onPress={() =>this.processForfeitTask() } />

                    </View>

                </View>
                
            </View>
        );
    }
}

export default DisplayCardScreen;

