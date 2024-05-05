import React, {TouchableOpacity, Component } from 'react'
import { Text, View, Button } from 'react-native'

export default function Home({navigation}) {
    return (
      <View>
        
        <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    )
  }

