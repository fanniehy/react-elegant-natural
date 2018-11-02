import React,{Component,Fragment} from 'react';
import { BrowserRouter as Router,Route,Redirect,Link,hashHistory} from 'react-router-dom';


// 页面组件
import App from './App';
import Login from './login/login';
import IndexPage from './enIndex/enIndex';
import FannieDay from './fannieDay/fannieday';
import Shop from './shop/shop';
import Collection from './collection/collection';
import About from './about/about';
import Contact from './about/about';

class Routers extends Component{
	render(){
		return (
				<Router>
					<Fragment>
						<Route exact path="/" component={IndexPage}></Route>
						<Route path="/index" component={IndexPage}></Route>
						<Route path="/fannieDay" component={FannieDay}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/shop" component={Shop}></Route>
						<Route path="/collection" component={Collection}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/contact" component={Contact}></Route>
					</Fragment>
				</Router>
			
		)
	}
	
}

export default Routers;