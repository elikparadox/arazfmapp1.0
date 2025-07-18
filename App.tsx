import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlayerScreen from './screens/PlayerScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const setup = async () => {
      await TrackPlayer.setupPlayer();
    };

    setup();

    TrackPlayer.registerPlaybackService(() => require('./service'));
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Player" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Player" component={PlayerScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

