import React, {Component} from 'react';
import '../../App.css';
import footer from '../../images/footer.png';

export default class Footer extends Component {
	render () {
		return <img className="image-footer" src={footer} alt="footer" />;
	}
}
