/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet,ToastAndroid } from "react-native";

const hocOne = WrappedComponent => class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoad : true,
        };
    }

    handleClick() {
        console.log('click from hocOne')
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                showLoad : false
            })
        }, 3000)
    }

    render() {
        return (
                this.state.showLoad ? <ActivityIndicator style={styles.indicator} size='large' color='#ff0000'/> : <WrappedComponent
                    {...this.props}
                    handleClick={this.handleClick}
                />
        );
    }
};

const styles = StyleSheet.create({
    indicator : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white',
    }
});

export default hocOne;