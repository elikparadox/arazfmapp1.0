import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import PlayerScreen from './components/PlayerScreen';

const App = () => {
  useEffect(() => {
    const setup = async () => {
      await TrackPlayer.setupPlayer();
    };

    setup();

    TrackPlayer.registerPlaybackService(() => require('./service'));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PlayerScreen />
    </SafeAreaView>
  );
};

export default App;
