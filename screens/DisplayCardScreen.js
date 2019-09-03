import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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

    render(){

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <CountDown 
                    until={this.state.timeTillDueDate}
                    onFinish={()=>alert('Task is due!')}
                    onPress={()=> alert('hello')}
                    size={20}
                />
                <Text>Title: {this.state.task.title}</Text>
                <Text>Description: {this.state.task.description}</Text>
                {/* <Text>Due Date: {this.state.task.dueDate}</Text> */}
                <Text>Due Date: {this.state.dueDateString}</Text>
                <Text>Submitted Date: {this.state.submittedDateString}</Text>
                <Text>Amount Pledge: {this.state.task.amount}</Text>
              
                
            </View>
        );
    }
}

export default DisplayCardScreen;

