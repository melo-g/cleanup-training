import React, { Component } from 'react';
import '../../App.css';
import ribbon from '../../images/red.png';
import family from '../../images/family.png';
import kitchen from '../../images/kitchen.png';
import Style from '../Style/Style.js'

import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default class Content extends Component {
	render() {
		return (
			<div>

				<div className="title"></div>

				<div className="content">
					<div className="body">
						<div className="inner-body">

							<div className="inner-title">
								<h4>診断結果</h4>
							</div>

							<div className="other-title">
								<h4>あなたは …</h4>
							</div>

							<div className="ribbon-tag">
								<img src={ribbon} alt="ribbon" />
								<div className="text-ribbon">スマイルタイプ</div>
							</div>

							<div className="content1">
								<div className="family-tag">
									<img src={family} alt="family" />
									<div className="text-family">※イラストは参考イメージです</div>
								</div>

								<div className="paragraph">
									<div><p>頑張れあと一歩！<br />努力が実る隠れ収納タイプ</p></div>
									<p>
										見た目をスッキリにするために、引き出しや棚にアイテムを押し込んでしまっている「隠れ肥満」になっていませんか？
											スマイルタイプさんは物が多いことでキッチンでアクションする回数が増えています。<br />
										収納することばかりにとらわれず、モノを整理をすることが大切です。1年に1度、使っているモノはどれか、使ってないモノはなぜ使っていないのかを具体的に考えてみましょう。<br />
										きっと、使ってるモノを使用頻度に応じて置き場所を変えるだけでキッチンの使い勝手は劇的に変わりますよ。 <br />
										スマイルタイプさんは友人や家族など、みなさんでキッチンを取り囲み、楽しい時間を過ごしたいという願望があります。
											そのために、使ってるモノと向き合ってキッチンを整えることで、夢をひとつずつかなえていきましょう。<br />
										そして、見た目スッキリを維持するためキープ力を少しずつつけていきましょう！
										</p>
								</div>
							</div>
						</div>
					</div>

					<div class="body-two">
						<p className="body-two-title">おススメアドバイス</p>

						<div className="content1">
							<div className="one">
								<p className="content1-title">理想の暮らしのイメージ作りに<br />ショールームを活用しませんか？</p>
								<p className="content1-paragraph">あなたは、人生を共にするキッチンでどう過ごしたいか、理想はありますか？ショールームのキッチンにはそれぞれに仮想ファミリーを設定して展示しています。様々なコンセプトをもとにしたキッチン収納を参考にしてみてください。きっとあなたなら、自分に合うタイプを見つけてモチベーションアップできます！やる気スイッチを手に入れましょう。</p>
								<button className="brown-button">システムキッチン「STEDIA」を知る</button>
							</div>

							<div className="two">
								<img src={kitchen} alt="kitchen" className="kitchen" />
								<button className="brown-button">新宿ショールーム特設ページ</button>
							</div>
						</div>
					</div>
				</div>

				<div className="body-three">
					<div className="three-title">
						<p>もう一度診断する</p>
					</div>

					<div className="media-title">
						<p>診断結果をシェアする</p>
					</div>

					<div className="social-media">
						<div className="facebook">
							<div><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></div>
							<div>Facebookでシェア</div>
						</div>

						<div className="twitter">
							<div><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></div>
							<div>Twitterでシェア</div>
						</div>
					</div>
					<Style />
				</div>

			</div>
		);
	}
}
