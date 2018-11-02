import React,{Component} from 'react';

import Header from "./../header";

import Footer from "./../footer";
class Collection extends Component{
	render(){
		return(
			<div>
				<Header></Header>
				<div>Collection</div>
				<Footer></Footer>
			</div>
		)
	}
}
export default Collection;