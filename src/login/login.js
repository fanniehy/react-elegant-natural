import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Row , Col , Form , Checkbox , Modal,message} from 'antd';
import 'whatwg-fetch';
import './login.css';
import './../common.css';
import loginBoxContent from './../static/icon/login-box-content.jpg';
import weixin from './../static/icon/weixin.png';
import weibo from './../static/icon/weibo.png';
import qq from './../static/icon/qq.png';

const FormItem = Form.Item;
class NormalLoginForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			pwd:''
		}
	}

	getUserName(el){
		this.setState({
			username:el.target.value,
		})
	}
	getpwd(el){
		this.setState({
			password:el.target.value,
		})
	}
	goLogin(){
		let user = new FormData();
		let _this = this;
		user.append('username',_this.state.username);
		user.append('password',_this.state.password);
		if (this.state.username && this.state.password) {
			fetch('http://127.0.0.1:80/elegantNatural/login.php',{
				method:'post',
				body:user,
				mode:"cors"
			}).then(res=>res.json()).then(data=>{
				if (data.status) {
					var user = {
						'ele_user':this.state.username,
						'ele_pwd':this.state.pwd,
					}
					localStorage.setItem('eleLogin',JSON.stringify(user))
					this.showModal(5)
				}else{
					message.error('登录失败，请检查用户名或密码');
				}
			})
		}else{
			message.warning('请输入用户名和密码');
		}
	}
	showModal(seconds,callback){
		const modal = Modal.success({
			title: "登录成功，"+seconds +"后自动跳转"
		})
		setInterval(()=>{
			seconds--;
			modal.update({				
				title: "登录成功，"+seconds +"后自动跳转"
			})
		},1000)
		setTimeout(() =>{ modal.destroy();this.props.history.push("/index")},seconds*1000);
	}
	render(){
        const { getFieldDecorator } = this.props.form;
		return(
			<div className='login-mask'>
				<div className='login-card set-middle'>
					<Row className='login-box'>
						<Col md={12} className='login-exhibition'>
							<div className='exhibition-box'>
								<img src={loginBoxContent} alt='逸然轩注册背景墙' />
							</div>
						</Col>
						<Col md={12} className='login-main'>
							<p style={{color:'#042d9a','textAlign':'center','fontWeight':600,'fontSize':'28px'}}>用户登录</p>
							<Form className='normal-login'>
								<FormItem style={{'marginBottom':0}}>
									{getFieldDecorator('username', {
										initialValue: this.state.username,
										rules:[{ required:true,message:'请输入用户名'}],
									})(
										<input placeholder='用户名' name='username' type='text' onChange={this.getUserName.bind(this)} className="login-input" />
									)}
									
								</FormItem>
								<FormItem>
									{getFieldDecorator('password',{
										initialValue:this.state.pwd,
										rules:[{ required:true,message:'请输入密码'}],
									})(
										<input placeholder='密码' type='password' onChange={this.getpwd.bind(this)} className="login-input" />
									)}
								</FormItem>
								<FormItem>
									<Row>
										<Col md={12}>
											{getFieldDecorator('remember')(
												<Checkbox>记住密码</Checkbox>
											)}
										</Col>
										<Col md={12}>
											<div>忘记密码?</div>
										</Col>
									</Row>									
								</FormItem>
								<FormItem>
									<button size='large' className='loginButton' onClick={this.goLogin.bind(this)}>登录</button>
								</FormItem>
							</Form>
							<div className='login-platform'>
								<Row>
									<Col md={8} className='login-decoration' style={{'textAlign':'right'}}>
										<em></em>
										<span></span>
									</Col>
									<Col md={8}>
										<p style={{'textAlign':'center',color:'#bbbbbb','fontSize':'20px'}}>第三方登录</p>
									</Col>
									<Col md={8} className='login-decoration' style={{'textAlign':'left'}}>
										<span></span>
										<em></em>
									</Col>
								</Row>
								<Row>
									<Col md={8} className='platform'>
										<img src= {weixin} alt='微信' />
									</Col>
									<Col md={8} className='platform'>
										<img src= {weibo} alt='微博' />
									</Col>
									<Col md={8} className='platform'>
										<img src= {qq} alt='QQ' />
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

const Login = Form.create()(NormalLoginForm)
export default Login
