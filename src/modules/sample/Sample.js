import React, {Component} from 'react';
import { Button,Icon } from 'antd-mobile';
import './style.scss';
import img1 from '../../imgs/favicon.png';

export default class Sample extends Component {
  render() {
    return (
      <div>
        <img src={img1}/>
        <Icon type="link" className='sampleIcon'/>
        例子
      </div>
    )
  }
}
