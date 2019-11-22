import React, {Component} from 'react';
import '../../App.css';
import header from '../../images/header.png';

export default class Header extends Component {
	render () {
		return <img className="image-header" src={header} alt="header" />;
	}
}
