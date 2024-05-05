import React, {TouchableOpacity, Component } from 'react'
import { Text, View, Button } from 'react-native'

export default function Home({navigation}) {
    return (
      <View>
        
        <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    )
  }

