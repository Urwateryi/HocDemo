## 前言
今天我在想，如果每个子页面都需要一个PageLoad的话，如果能将这个页面加载封装在父类里就好了，就不用在子类里一个一个写了，也便于维护。于是我上网查，似乎可以通过高阶组件实现。

## 概念简述
高阶组件（higher-order components）简称HOC或HOC组件，是一个React组件复用的高级技巧。

> A higher-order component is a function that takes a component and returns a new component.

传入的参数是React组件，然后返回一个新的React组件。

[详细概念请参考](https://github.com/sunyongjian/blog/issues/25)
## Demo

我自己类比理解为：父类
```
/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet,ToastAndroid } from "react-native";

//WrappedComponent为上文提到的传入的组件参数，经过包装后，会返回一个新的组件
//下文将PageOne作为传入的组件，经过包装（加上一个3秒的进度圈）后，重新返回

//WrappedComponent外可以还有
const hocOne = WrappedComponent => class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoad : true,
        };
    }

    //还可以在HOC里定义一些其他的操作，如果子类调用该方法的话，执行的就是父类的操作
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
```

我自己类比理解为：子类

```
import React,{ PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import hocOne from "../hocs/hocOne";
import hocTwo from "../hocs/hocTwo";

//这里可以引入多个HOC，如果有相同的属性，则后面引入的会覆盖前面的
//这里使用了装饰器
@hocOne
@hocTwo
export default class PageOne extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>PageOne</Text>
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
```

## 写在最后
我也是初学者，如果写得不好，或者错误的地方，欢迎大家指正

[传送门](https://github.com/Urwateryi/HocDemo.git)# HocDemo
使用高阶组件封装base类