/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import React,{ PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import hocOne from "../hocs/hocOne";
import hocTwo from "../hocs/hocTwo";

@hocOne
@hocTwo
export default class PageTwo extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>PageTwo</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    txt:{
        color:'black',
        fontSize:40,
        fontWeight :'200'
    },
});