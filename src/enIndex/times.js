import React , { Component , Fragment} from 'react';
import {Row,Col} from "antd"

class Times extends Component{
	render(){
		return(
			<Fragment>
				<div className="times">
					<Row>
						<Col span={1}>左侧</Col>
						<Col span={1} offset={18}>右侧1</Col>
						<Col span={1}>右侧2</Col>
						<Col span={1}>右侧3</Col>
						<Col span={1}>右侧4</Col>
					</Row>

				</div>
				<div className="news">
					<Row>
						<Col span={1}>左侧</Col>
						<Col span={1} offset={18}>右侧1</Col>
						<Col span={1}>右侧2</Col>
						<Col span={1}>右侧3</Col>
						<Col span={1}>右侧4</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}

export default Times;