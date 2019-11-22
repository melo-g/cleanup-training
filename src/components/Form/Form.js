import React, {Component} from 'react'
import '../../App.css'
import border from '../../images/border.png'
import formData from './data.js'

export default class Form extends Component {
	render () {
	console.log("hello", formData)
		return (
			<div className="form">
				
				<p className="form-title">キッチン収納診断</p>
				<p className="form-desc">当てはまるものを「はい」か「いいえ」で選択ください。</p>

				<div class="content">
					<div class="form-body">
						<img src={border} alt="border" />

						{formData.map((data)=>
							
						<div className="form-body-content" key={data.id}>
							<div className="item">
								<p className="item-question">Q</p>
								<p className="item-number">{data.number}.</p>
							</div>

							<div className="question">
								<p>{data.question}</p>
							</div>

							<div className="answer">
								<button type="button" className="answer-yes">はい</button>
								<button type="button" className="answer-no">いいえ</button>
							</div>
						</div>

							)}
					</div>
				</div>

			</div>			
			);
	}
}