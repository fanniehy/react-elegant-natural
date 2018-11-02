import React  ,{Component,Fragment} from 'react';

import indexFlower from "./../static/icon/indexFlower.png"

class Banner extends Component{
	render(){
		return(
			<Fragment>
				<div className="banner">
					<img className="indexFlower" src={indexFlower} title="愿你每天被生活温柔以待" alt="愿你每天被生活温柔以待"/>
					<p className="indexTitle">&nbsp;E&nbsp;L&nbsp;E&nbsp;G&nbsp;A&nbsp;N&nbsp;T&nbsp; &nbsp;N&nbsp;A&nbsp;T&nbsp;U&nbsp;R&nbsp;A&nbsp;L&nbsp;</p>
				</div>

			</Fragment>
		)
	}
}

export default Banner