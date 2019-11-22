import React, {Component} from 'react'
import '../../App.css'
import border from '../../images/border.png'

export default class Form extends Component {
	render () {
		return (
			<div className="form">
				
				<p className="form-title">キッチン収納診断</p>
				<p className="form-desc">当てはまるものを「はい」か「いいえ」で選択ください。</p>

				<div class="content">
					<div class="form-body">
						<img src={border} alt="border" />

					</div>
				</div>

			</div>			
			);
	}
}