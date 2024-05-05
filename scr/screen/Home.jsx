import React, {TouchableOpacity, Component } from 'react'
import { Text, View, Button } from 'react-native'

export default function Home({navigation}) {
    return (
      <View>
        
        <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    )
  }

