import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowLeft from '../assets/arrow-left.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './RegisterScreen.styles';



const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#00D0E0', '#006D78']}
      style={styles.gradientBackground}
    >
      <SafeAreaView style={styles.container}>
        {/* Назад */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={ArrowLeft} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>Create an account</Text>

{/* Name */}
<View style={styles.inputWrapper}>
  <Icon name="account" size={20} color="#fff" style={styles.inputIcon} />
  <TextInput
    placeholder="Enter name"
    placeholderTextColor="#eee"
    style={styles.input}
  />
</View>

{/* Email */}
<View style={styles.inputWrapper}>
  <Icon name="email-outline" size={20} color="#fff" style={styles.inputIcon} />
  <TextInput
    placeholder="Enter email or phone"
    placeholderTextColor="#eee"
    keyboardType="email-address"
    style={styles.input}
  />
</View>

{/* Password */}
<View style={styles.inputWrapper}>
  <Icon name="lock-outline" size={20} color="#fff" style={styles.inputIcon} />
  <TextInput
    placeholder="Enter password"
    placeholderTextColor="#eee"
    secureTextEntry
    style={styles.input}
  />
</View>

{/* Sign Up */}
<TouchableOpacity style={styles.signUpButton}>
  <Text style={styles.signUpText}>Sign Up</Text>
</TouchableOpacity>

{/* OR */}
<Text style={styles.orText}>OR</Text>

{/* Apple (disabled) */}
<TouchableOpacity style={[styles.socialButton, styles.appleButton]} disabled>
  <Icon name="apple" size={20} color="#aaa" style={styles.socialIcon} />
  <Text style={styles.socialTextDisabled}>Sign in with Apple</Text>
</TouchableOpacity>

{/* Google */}
<TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
  <Icon name="google" size={20} color="#fff" style={styles.socialIcon} />
  <Text style={styles.socialText}>Sign in with Google</Text>
</TouchableOpacity>

{/* Login link */}
<TouchableOpacity onPress={() => navigation.navigate('Login')}>
  <Text style={styles.loginText}>Have an account? Log in</Text>
</TouchableOpacity>


        {/* Тут будут input'ы, кнопки и т.д. */}



      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;

