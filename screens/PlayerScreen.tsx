import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import ArazLogo from '../assets/Arazlogo.png';
import PlayButtonImage from '../assets/playbutton.png';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import styles from './PlayerScreen.styles';

const { width } = Dimensions.get('window');

const PlayerScreen = () => {
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const images = [Img1, Img2, Img3];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({
        x: nextIndex * width * 0.8,
        animated: true,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: 'arazfm',
        url: 'https://s14.myradiostream.com/30454/listen.mp3',
        title: 'Araz FM',
        artist: 'Live Radio',
      });
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  return (
    <LinearGradient colors={['#00D0E0', '#006D78']} style={styles.container}>
      <View style={styles.logoWrapper}>
         <Image source={ArazLogo} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.playButtonWrapper}>
        <TouchableOpacity onPress={togglePlayback}>
         <Image
            source={PlayButtonImage}
            style={styles.playButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.carouselWrapper}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        >
          {images.map((img, index) => (
            <View key={index} style={styles.slide}>
              <Image
                source={img}
                style={styles.carouselImage}
                resizeMode="cover"
              />

            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.pagination}>
        {images.map((_, i) => (
          <Text key={i} style={styles.dot}>
            {i === currentIndex ? '●' : '○'}
          </Text>
        ))}
      </View>

      <View style={styles.registerWrapper}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default PlayerScreen;
