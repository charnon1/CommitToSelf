import React from 'react';
import { Text, View, FlatList, Image, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button,  Card, Title, Paragraph } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Toast from 'react-native-simple-toast';

import DisplayCardScreen from './DisplayCardScreen';


class HomeScreen extends React.Component {
    
    static navigationOptions = {
        headerTitle:(
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                <Image
                    style={{width: 200, height: 30}}
                    source={require('../resources/logo.png')}
                />
            </View>
        ),
    }

    constructor(props){
        super(props)
        this.state = {
            allTasks: [],
            hello: 'hello',
            newTask: null,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        Toast.show('Welcome to Commit To Self!');
        console.log("homescreen");
      
        //passses when there is a new task from task screen
        if(nextProps.navigation.getParam("newTask") != undefined){
            let newTask = nextProps.navigation.getParam("newTask");
                return{
                    newTask: newTask,
                    allTasks: [...prevState.allTasks, newTask],
    
                }
                
        }
            
        //passes when there is a task to be removed from display screen
        if(nextProps.navigation.getParam("taskToRemove") != undefined ){
            Toast.show("Task removed successfully")
            return{
                allTasks: prevState.allTasks.filter(function(item){
                    return item != nextProps.navigation.getParam("taskToRemove")
                }),
            }
        }

        return null;
    }

    navigateToDisplayCardScreen(item){
        console.log("navigating to the display card screen...");
        this.props.navigation.navigate('DisplayCardScreen', {item: item});
    }

    renderHomeScreen(){

        if(this.state.allTasks.length == 0){
            return(
                <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
                    <Text>You have no task yet! Click on Task to add a task</Text>
                </View>
            )
        }else{
            return(
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList 
                            data={this.state.allTasks}
                            renderItem={
                                ({item}) =>
                                <Card style={{height:100, width: 300, borderWidth:1, margin: 20, padding: 5}} onPress={()=> this.navigateToDisplayCardScreen(item)}>
                                    <Card.Title title={item.title} style={{fontWeight: 'bold'}} />
                                    <Card.Content>
                                        <Paragraph>{item.amount}</Paragraph>
                                        {/* <Paragraph>{item.dueDate}</Paragraph> */}
                                    </Card.Content>
                                   

                                </Card>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
            )
        }
    }

    render() {
        return(
            this.renderHomeScreen()
        )
      
    }
}

const AppNavigator = createStackNavigator({
    DisplayCardScreen: {
        screen: DisplayCardScreen
    },
});


export default HomeScreen;
