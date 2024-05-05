import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default function Home({navigation}) {
    return (
      <View>
        <Button
        title="about"
        onPress={() => navigation.navigate('About')}
      />
      </View>
    )
  }

