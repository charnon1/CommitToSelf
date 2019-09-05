import React from 'react';
import { Text, View,TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import FloatingLabel from 'react-native-floating-labels';

import HomeScreen from './HomeScreen';
import Task from  '../objects/Task';
import { ScrollView } from 'react-native-gesture-handler';

class TaskScreen extends React.Component {

    static navigationOptions = {
        headerTitle:(
            <View style={{paddingLeft: 20, justifyContent:'center', alignItems: 'center'}}>
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

    processTaskSubmission(){ 
        console.log("Process task submission");
      
        let newTask = new Task(this.state.title, this.state.description, this.state.dueDate, this.state.amount)
        newTask.submittedDate = new Date();
        newTask.amount = parseInt(this.state.amount, 10);
        console.log(newTask.amount);
        this.props.navigation.navigate('HomeScreen',{newTask: newTask});
    }

    renderDatePicker(){
        console.log("rendering date picker...");
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <DatePicker 
                    date={this.state.dueDate}    
                    onDateChange={dueDate => this.setState({dueDate})}
                />
            </View>
        );
    }

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{flexDirection: 'column', flex: 1, backgroundColor: 'white', justifyContent:'center'}}>

                    <View style={{flexDirection: 'row', alignItems:'center',margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Title</Text>
                        <TextInput style={{width: 200}} placeholder="e.g. workout"/>
                    </View>

                    <View style={{flexDirection: 'row', alignItems:'center', margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>Description</Text>
                        <TextInput style={{width: 200}} placeholder="e.g. cardio for 30 minutes"/>
                    </View>

                    <View style={{flexDirection: 'row', alignItems:'center', margin: 20}}>
                        <Text style={{fontSize: 12, textAlign:'left'}}>To be done by: </Text>
                        {/* <DatePicker 
                            date={this.state.dueDate}    
                            onDateChange={dueDate => this.setState({dueDate})}
                        /> */}
                        <TouchableOpacity onPress={()=>this.renderDatePicker()}><Text>Date picker</Text></TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', alignItems:'center', margin: 20}}>
                        <Text style={{fontSize: 12 }}>Pledging amount: </Text>
                            <TextInput
                                style={{height: 40}}
                                keyboardType='numeric'
                                placeholder="How much do you value this task?"
                                onChangeText={(amount) => this.setState({amount})}
                                value={this.state.amount}
                            />
                    </View>
                </View>
                     
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
})

export default TaskScreen;

