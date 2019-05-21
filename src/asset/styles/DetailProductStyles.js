import {
    StyleSheet,
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    Text,
    View,
} from 'react-native';

const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;
const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: window.width,
      height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
      height: STICKY_HEADER_HEIGHT,
    },
    stickySectionText: {
      color: 'white',
      fontSize: 20,
      margin: 10
    },
    fixedSection: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    fixedSectionText: {
      color: '#999',
      fontSize: 20
    },
    parallaxHeader: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      paddingTop: 100
    },
    avatar: {
      marginBottom: 10,
      borderRadius: AVATAR_SIZE / 2
    },
    productName: {
      color: 'black',
      fontSize: 24,
      paddingVertical: 5,
    },
    productNameContainer: {
      height : 50,
      backgroundColor: '#fff',
      borderBottomWidth: 0.5
    },
    sectionTitleText: {
      color: 'white',
      fontSize: 18,
      paddingVertical: 5
    },
    // row: {
    //   overflow: 'hidden',
    //   paddingHorizontal: 10,
    //   height: ROW_HEIGHT,
    //   backgroundColor: 'white',
    //   borderColor: '#ccc',
    //   borderBottomWidth: 1,
    //   justifyContent: 'center'
    // },
    // rowText: {
    //   fontSize: 20
    // },
    safeArea: {
      flex: 1,
      backgroundColor: '#111'
    },
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: '#111'
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: '#111'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
  });


  export default styles;