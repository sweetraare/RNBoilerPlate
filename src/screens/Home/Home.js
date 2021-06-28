import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <Text>Holii</Text>
      </SafeAreaView>
    </View>
  );
}

export default Home;
