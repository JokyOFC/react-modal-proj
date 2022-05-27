import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';


export default class App extends Component {

  render(){
    return (
              <View transparent={true} style={{ backgroundColor:'#292929', width:'100%', height:350,
                                                borderRadius: 30,}}>
                <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                    <Text style={{ color: '#FFF', fontSize:30, textAlign:'center', marginBottom: 5}}>Entrei!</Text>
                    <View style={{width: '100%'}}>
                        <Button title='Sair' onPress={ this.props.fechar }/>
                    </View>
                </View>                
              </View>
    );
  }
}