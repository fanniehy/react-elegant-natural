import React , {Component,Fragment} from 'react';
import {Row,Col} from 'antd';

class Footer extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<Fragment>
				<div className="footer">
					<div className="footerName">
						<Row className="">
							<Col span={6}>底部分类一</Col>
							<Col span={6}>底部分类一</Col>
							<Col span={6}>底部分类一</Col>
							<Col span={6}>底部分类一</Col>
						</Row>
					</div>					
				</div>
			</Fragment>
		)
	}
}
export default Footer;