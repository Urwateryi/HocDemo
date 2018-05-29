/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/5/29 0029
 */
import React, { Component } from 'react';

const hocTwo = WrappedComponent => {
    console.log('simpleHoc');
    return class extends Component {
        render() {
            return <WrappedComponent
                {...this.props}
            />
        }
    }
};

export default hocTwo;