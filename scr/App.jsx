import React, { Component,useState, useEffect} from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1 }}>
       <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#1d5eff',
          paddingVertical:10,
          }}>
        <Text style={{color:'#ffffffff'}}> HOME </Text>
        </TouchableOpacity >

        <TouchableOpacity style={{
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#1d5eff',
          paddingVertical:10,
          }}>
        <Text style={{color:'#ffffffff'}}> MENU </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flex: 1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#1d5eff',
          paddingVertical:10,
          }}>
        <Text style={{color:'#ffffffff'}}> ABOUT </Text>
        </TouchableOpacity>
       </View>
      </View>
    )
  }
}

