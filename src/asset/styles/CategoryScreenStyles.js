import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    // grid view
    gridView: {
        marginTop: 5,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        // padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
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