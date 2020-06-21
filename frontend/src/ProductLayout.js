
import React from 'react';
import { Button } from '@material-ui/core';



class ProductLayout extends React.Component{
  

	constructor(props){
		super(props);
		this.state = {value: '', info: [], counter: 10, products:[]};
		

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleButtonChange = this.handleButtonChange.bind(this);
		this.checkData = this.checkData.bind(this);

		
  	}


	/*
	  	Function to constantly change state value based on user input in search bar
	*/
	handleChange(event) {
		this.setState({value: event.target.value});
	
	}
	  
	handleButtonChange(event){
		let temp = this.state.counter + 10
		this.setState({counter: temp})

		if(this.state.info != null){
			let tempArr = this.state.info.slice(0, this.state.counter);

			this.setState({
				products: tempArr
			})
		}
	}
  
  
	handleSubmit(event) {
		this.componentDidMount();
		
	  }
	  
	checkData(){
		if(this.state.info != null){
			let tempArr = this.state.info.slice(0, this.state.counter);
	
			this.setState({
				products: tempArr
			})
		}
	}
  

 	async componentDidMount(){

		if(this.state.value == ''){
			let link = "http://localhost:8080/allProducts";
			fetch(link)
				.then(response => response.json())
				.then(data => this.setState({info: data, counter:10}))
				.finally(
					this.checkData()
				)

			
		}
		else{
			let link = "http://localhost:8080/"
			link = link.concat(this.state.value)
			console.log(link);
			fetch(link)
				.then(response => response.json())
				.then(data => this.setState({info: data}))

			if(this.state.info != null){
				let tempArr = this.state.info.slice(0, this.state.counter);
		
				this.setState({
					products: tempArr
				})
			}
		}


		
		
  	}


	render() {

	  return (
			<div class="album py-5 text-center">
				<label class="container text-center">
					
					<input class="form-control" type="text" placeholder="Search Product Name" aria-label="Search" value={this.state.value} onChange={this.handleChange}></input>
				</label>
				<input id="search-submit-button" class="btn" type="submit" value="Submit" onClick={this.handleSubmit}></input>
				<p></p>
				<div class="container pt-4" id="product-container">
					<div class="row">
				  		{this.state.products.map(info => (
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<img class=" card-img-top" width="100%" height="225" aria-label="Placeholder: Thumbnail"
										src=
										{
											info.images != null
											? info.images[0][0].thumbnail
											: ''
										}
									>
									</img>
									<div class="card-body product-card"> 
										<p class="card-text">{info.Name}</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">    
												<button type="button" class="btn btn-sm btn-outline-secondary" > <a href={"/Product/".concat(info._id)}> View Product </a> </button>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<Button
					variant='contained'
					color='primary'

					onClick={this.handleButtonChange}
				>
					Show More
				</Button>
			</div>

		);
	}

}

export default ProductLayout;