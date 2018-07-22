import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text, View, StyleSheet, Button
} from 'react-native';

class StratScreen extends Component {
    constructor()
{
    super();
    this.state = {
        show:"GPA CALCULATOR"
    }
    
}  
presBotton(){
alert("ok")
}
render() {
               
               
            return (
                <View style={style.viewStyle}>
                
                
                    <View style = { style.innercontainer}>
                    <View style = { style.basecontainer}>
                    <Button onPress={this.presBotton.bind()}  
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"/>
                    <Icon name="ios-trash" size={30} color="#900" />
                    </View> 

                    <View style = { style.basecontainer}>
                    <Text style={style.textStyle}>{this.state.show}</Text>
                    </View> 
                    
                    <View style = { style.basecontainer1}>
                    <Text style={style.textStyle}>{this.state.show}</Text>
                    </View> 

                    </View>    
                    <View style=  { style.innercontainer1}>
                    <Text style={style.textStyle}>{this.state.show}</Text>
                    </View>                                            
                    
                     
                </View>
             
        )
    }
}

const style =StyleSheet.create ({
    viewStyle:{
        flex:1,
        backgroundColor:'red'
    },
    innercontainer:{
  backgroundColor:'yellow',
  flex:1,
  flexDirection:'row',
  borderColor:'red',
  borderWidth : 1,
  borderRadius:4
    },
    
    innercontainer1:{
  backgroundColor:'yellow',
  flex:1,
  borderColor:'red',
  borderWidth : 1,
  borderRadius:4
    },
    textstle:{
        color:'green'
    },

    basecontainer : {
        backgroundColor:'gray',
        flex:1

    },
    basecontainer1 : {
        backgroundColor:'blue',
        flex:1

    }
});



export default StratScreen;