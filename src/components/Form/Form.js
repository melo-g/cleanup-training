import React, {Component} from 'react'
import '../../App.css'
import border from '../../images/border.png'
import formData from './data.js'
import Style from '../Style/Style.js'

export default class Form extends Component {
	render () {
	//console.log("hello", formData)
		return (
			<div className="form">
				
				<p className="form-title">キッチン収納診断</p>
				<p className="form-desc">当てはまるものを「はい」か「いいえ」で選択ください。</p>

				<div class="content">
					<div class="form-body">
						<img src={border} alt="border" />

						{formData.map( data =>
							
						<div className="form-body-content" key={data.id}>
							<div className="item">
								<p className="item-question">Q</p>
								<p className="item-number">{data.number}.</p>
							</div>

							<div className="question">
								<p>{data.question}</p>
							</div>

							<div className="answer">
								<button className="answer-yes">はい</button>
								<button className="answer-no">いいえ</button>
							</div>
						</div>
							)}

						<p className="email">メールアドレスをお教えください。<span>（必須）</span></p>
						
						<p className="website">abc@oikura.cleanup.jp</p>

						<p className="policy"><a href="#">個人情報保護方針のご確認*</a></p>
						</div>

				</div>
					<button className="diagnosis">診断結果を見る</button>
					<Style/>
			</div>			
			);
	}
}