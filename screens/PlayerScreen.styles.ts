import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  logo: {
    width: width * 0.5,
    height: 60,
    marginBottom: 20,
  },
  playButtonWrapper: {
    marginBottom: 450,
    alignItems: 'center',
  },
  playButtonImage: {
    width: 60,
    height: 60,
  },
  carouselWrapper: {
    position: 'absolute',
    top: 220,
    width: width * 0.8,
    height: 380,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    zIndex: 1,
  },
  slide: {
    width: width * 0.8,
    height: 380,
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dot: {
    fontSize: 20,
    marginHorizontal: 5,
    color: '#fff',
  },
  registerWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
