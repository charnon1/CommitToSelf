import React from 'react';
import { Text, View, FlatList, Image, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';

class EntryScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          lul: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        setTimeout(()=>{
            nextProps.navigation.navigate("HomeScreen");
        }, 5000);
        return null;
    }

    render() {
        return(
           <Text>hello</Text>
        )
      
    }
}


export default EntryScreen;
