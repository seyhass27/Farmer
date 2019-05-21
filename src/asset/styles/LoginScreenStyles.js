import {StyleSheet} from 'react-native';

const primaryColor = '#137aa0';

const styles = new StyleSheet.create({
    container: {
        // flex : 1,
        backgroundColor: primaryColor,
        //marginTop: 25,
        //height: '100%',
    },
    login_contianer: {
        
        backgroundColor: '#ccc',
        marginTop: 20,
        flexDirection: 'column'
    },
    logo:{
        width: 120,
        height: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    logo_container:{
        height: '50%', 
        //flex: 1,
        backgroundColor: primaryColor
    },
    content_container:{
        backgroundColor: primaryColor,
        height: '50%',
        //borderWidth: 1,
        //marginTop: 'auto'
        // flex: 1,
    },
    register_button_container:{
        height: 38,
        flexDirection: 'row',
        //borderWidth: 0.5,
    },
    register_button:{
        backgroundColor: '#fff',
        flex: 4,
        borderRadius: 20,
        borderBottomWidth: 0.5,
        borderRightWidth: 1
    },
    register_button_content:{
        color: primaryColor,
        fontSize: 18
    },
    center:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    txt_choose_language:{
        color: '#fff',
        marginTop: '15%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    switch_button_language_container:{
        height: 38,
        //borderWidth: 1,
        marginTop: '5%',
        flexDirection: 'row'
    },
    switch_button: {
        backgroundColor: primaryColor,
        flex: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    },
    language_text: {
        color: '#fff'
    }

    
})

export default styles;