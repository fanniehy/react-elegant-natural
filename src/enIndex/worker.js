import React , { Component , Fragment} from 'react';
import { Button} from 'antd';


import worker from './../static/icon/worker.png'

class Workers extends Component{
	render(){
		return(
			<Fragment>
				<div className="worker">
					<div className="workerContent">
						<img className="workerImg" src={worker} />
						<p style={{'fontSize':'22px','fontWeight':600,}}>Flower Care Workers</p>
						<p style={{'fontSize':'16px','width':'60%','fontWeight':600,}}>We have workers skilled flower care, with many years of experience in the profession, the meticulously cared create the best products for customers</p>
						<Button type="primary" size="large">CONTACT NOW!</Button>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Workers;