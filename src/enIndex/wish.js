import React,{Component,Fragment} from 'react';
import {Row,Col} from "antd"

class Wish extends Component{
	render(){
		return(
			<Fragment>
				<div className="wish">
					<Row gutter={32} style={{'height':'100%'}}>
						<Col span={8} className="gutter-row">
							<div className="exceptional">
								<p style={{'fontSize':'20px','fontFamily':'MV Boli'}}>EXCEPTIONAL</p>
								<p style={{'fontSize':'26px','fontFamily':'Fixedsys','paddingBottom':'20px','borderBottom':'1px solid #f0f0f0'}}>Service We Offer</p>
								<p className="wishLeftContent">BETTER is a simply beautiful and delightful PSD template speacially designed for gardening and home decoration online shop. You will immediately fall in love with those cheerful and easily customizable layouts of BETTER. A perfect choice for your little adorable shop. Go for it!   
We provide exceptional Garden services to a wide range of commercial and residential properties for over 10 years...</p>
							</div>
						</Col>
						<Col span={16} className="gutter-row wishRight">
							<div className="gift">
								<p style={{'fontSize':'20px','fontWeight':600}}> ————Gift From Flower</p>
								<p style={{'fontSize':'18px','fontWeight':600}}> ——&nbsp;&nbsp;Planting Of Garden</p>
								<p style={{'fontSize':'18px','fontWeight':600}}> ——&nbsp;&nbsp;Indoor Decoration</p>
							</div>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}

export default Wish;