import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState } from 'react';
import { Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar'


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)

  }

  sair(visible){
    this.setState({modalVisible: false})
  }

  entrar(){
    this.setState({modalVisible: true})
  }

  render(){
    
    return (
      <View style={styles.container}>
        <Text style={styles.textoAbrir}>Aperte para entrar</Text>

          <View style={styles.botao}>
            <Button title='Entrar' onPress={ this.entrar } style={styles.botao}/>
          </View>
            <Modal transparent={true} animationType='fade' visible={this.state.modalVisible}>
              <View style={{margin:15, flex:1, alignItems:'center', justifyContent:'center'}}>
                <Entrar fechar={() => this.sair(false)}/>
              </View>
            </Modal>
          <StatusBar style="auto" />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: '25%',
    height: '10%'
  },
  textoAbrir: {
    fontSize: 25,
    paddingBottom: 10
  }
});
