import React from 'react';
import{StyleSheet, TouchableOpacity, Text,View} from 'react-native';

const FlatButton = ( props ) => {
    return(
        <TouchableOpacity>
        <View style={styles.button}>
        <Text style={styles.buttonText}>{ props.text }</Text>
        </View>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
button:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#fff',
},
buttonText:{
    color:'black',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center',
},
})

export default FlatButton;