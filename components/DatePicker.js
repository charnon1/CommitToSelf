import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import DatePicker from 'react-native-date-picker';


class DisplayCardScreen extends React.Component {

    render(){
        return (
            <DatePicker 
                date={this.state.dueDate}    
                onDateChange={dueDate => this.setState({dueDate})}
            />
        );
    }
}

