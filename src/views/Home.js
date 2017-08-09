import React, { Component } from 'react'
import { getBookInfo } from '../api/api'

class Home extends Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}
	componentWillMount() {
		getBookInfo().then(res=>{
			if(res.code === 200){
				this.setState({
		        	data: res.data.pay_list
		        })
			}
		})
	}
	render(){
		return (
			<div>
				{
					this.state.data.map((keys, index) => {
						return <p key={index}>{keys.order_id}</p>
					})
				}
			</div>
		)
	}
}

export default Home