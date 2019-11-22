import React, {Component} from 'react'
import '../../App.css'
import style from '../../images/style.png'

export default class Style extends Component {
	render(){
		return(
			<div>
				<img className="copyright-img" src={style} alt="style" />

				<p className="copyright">Copyright 暮らしStyle. All rights reserved.</p>
			</div>
			);
	}
}