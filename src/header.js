import React , {Component} from 'react';
import {Link} from "react-router-dom";
import {Row,Col} from 'antd';
import "./common.css";






class Header extends Component{
	render(){
		return (
				<div className="header">
					<div className="logo">图像一</div> 
					<div className="navigation">
						<Row>
							<Col span={4} offset={4}>
								<Link to="/" className="nav">HOME</Link>
							</Col>
							<Col span={4}>
								<Link to="/shop" className="nav">SHOP</Link>
							</Col>
							<Col span={4}>
								<Link to="/collection" className="nav">COLLECTION</Link>
							</Col>
							<Col span={4}>
								<Link to="/about" className="nav">ABOUT</Link>
							</Col>
							<Col span={4}>
								<Link to="/contact" className="nav">CONTACT</Link>
							</Col>
						</Row>
					</div> 
				</div>
		)
	}
}

export default Header;
