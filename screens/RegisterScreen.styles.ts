import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 24,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  signUpButton: {
    height: 50,
    backgroundColor: '#004C64',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 16,
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  appleButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  socialIcon: {
    marginRight: 12,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
  socialTextDisabled: {
    color: '#aaa',
    fontSize: 16,
  },
  loginText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
    textDecorationLine: 'underline',
  },
});

export default styles;
