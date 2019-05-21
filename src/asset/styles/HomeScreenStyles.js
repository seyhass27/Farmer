import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    viewPager: {
        flex: 1
      },
        pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
    // grid view
    gridView: {
        marginTop: 20,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
      // Float Button
      actionButtonIcon: {
        fontSize: 11,
        height: 12,
        color: '#ccc',
      },
      floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
  });