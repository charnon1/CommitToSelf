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
        }, 2000);
        return null;
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{}}
                    source={require('../resources/entryLogo.png')}
                />
            </View>
        )
      
    }
}


export default EntryScreen;
