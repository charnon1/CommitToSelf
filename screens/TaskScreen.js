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

    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <FloatingLabel 
                    labelStyle={styles.labelInput}
                    inputStyle={styles.input}
                    style={styles.formInput}
                >Title: </FloatingLabel>
                     
                {/* <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',flex:1,  alignItems:'center'}}>
                        <Text>Title: </Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="e.g. do homework"
                            onChangeText={(title) => this.setState({title})}
                            value={this.state.text}
                        />
                     </View>
                </View>

                <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',flex:1, alignItems:'center'}}>
                        <Text>Description: </Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="e.g. revise chemistry"
                            onChangeText={(description) => this.setState({description})}
                            value={this.state.description}
                        />
                    </View>
                </View> 

                {/* <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',flex:1, alignItems:'center'}}>
                        <Text>To be done by: </Text>
                        <DatePicker 
                            date={this.state.dueDate}    
                            onDateChange={dueDate => this.setState({dueDate})}
                        />
                    </View>
                </View> */}

                {/* <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row',flex:1, alignItems:'center'}}>
                        <Text>Pledging amount: </Text>
                        <TextInput
                            style={{height: 40}}
                            keyboardType='numeric'
                            placeholder="How much do you value this task?"
                            onChangeText={(amount) => this.setState({amount})}
                            value={this.state.amount}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={() =>
                        this.processTaskSubmission()}>
                    <Text>Submit Task</Text>   
                </TouchableOpacity>   */}
                     
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
      labelInput:{
          color: '#673AB7',
      },
      input:{
        borderWidth: 0,
      },
      formInput:{
        borderBottomWidth: 1.5,
        marginLeft: 20,
        borderColor: '#333'
      },
})

export default TaskScreen;

