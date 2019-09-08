import React from 'react';
import { Text, View, FlatList, Image, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button,  Card, Title, Paragraph } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';


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
        console.log("homescreen");
       // console.log(nextProps);
       // console.log(prevState);
        // console.log("tasK: " + nextProps.navigation.getParam("newTask"));
        if(nextProps.navigation.getParam("newTask") != undefined){
            //console.log("size of allTasks: " + prevState.allTasks.length);
            let newTask = nextProps.navigation.getParam("newTask");
            //console.log("task object: " + newTask.title);
            return{
                allTasks: [...prevState.allTasks, newTask],
            }
        }else{
            return null;
        }
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
                                    <Card.Actions style={{borderWidth: 1}}>
                                        <Button>Remove</Button>
                                        <Button>View</Button>
                                    </Card.Actions>

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
