import React , { Component , Fragment} from 'react';
import {Row,Col,Icon,Button,Layout} from "antd"


import LeafLg from './../static/icon/leaf-lg.png';
import LeafSm from './../static/icon/leaf-sm.png';
import Forest from './../static/icon/forest.png';

import Vase1 from './../static/icon/vase-1.png';
import Vase2 from './../static/icon/vase-2.png';
import Vase3 from './../static/icon/vase-3.png';
import Vase4 from './../static/icon/vase-4.png';

const {Header, Footer, Sider, Content} = Layout;

class Product extends Component{
	render(){
		return(
			<Fragment>
				<div className="product">
					<Row>
						<Col span={5}>
							<span style={{'paddingTop':'5px','fontWeight':'600','fontSize':'20px','borderTop':'2px solid #cc9900'}}>NEW PRODUCTS</span>
						</Col>
						<Col span={2} offset={17}>
					          <Button type="normal" size="small" >
					            <Icon type="left" />
					          </Button>

					          <Button type="primary" size="small" style={{'backgroundColor':'#000','marginLeft':'5px'}}>
					            <Icon type="right" />
					          </Button>
						</Col>
					</Row>
					<Row gutter={24} className="productContent">
						<Col span={12} className="productLeft">
							<img style={{'left':'250px','top':'20px'}} src={LeafLg} />
							<img style={{'left':'10px','top':'350px'}} src={LeafSm} />
							<img className="forestImg" src={Forest} />
						</Col>
						<Col span={12} className="productRight">
							<Row gutter={16} className="productRightBox">
								<Col span={12} className="vaseBox">
									<div className="vaseImgBox">
										<img src={Vase1} />
									</div>
								</Col>
								<Col span={12} className="vaseBox">
									<div className="vaseImgBox">
										<img src={Vase2} />
									</div>
								</Col>
								<Col span={12} className="vaseBox">
									<div className="vaseImgBox">
										<img src={Vase3} />
									</div>
								</Col>
								<Col span={12} className="vaseBox">
									<div className="vaseImgBox">
										<img src={Vase4} />
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}

export default Product;