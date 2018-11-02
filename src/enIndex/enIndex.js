import React , {Component,Fragment} from 'react';
import "./enIndex.css";

import Header from "./../header";
import Banner from "./banner";
import Wish from "./wish";
import Worker from "./worker";
import Product from "./product";
import VideoPlay from "./videoPlay";
import Times from "./times";
import Bottom from "./bottom";
import Footer from "./../footer";


class IndexPage extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<Fragment>
				<Header></Header>
				<Banner></Banner>
				<Wish></Wish>
				<Worker></Worker>
				<Product></Product>
				<Footer></Footer>
			</Fragment>
		)
	}
}

export default IndexPage;