
import React from 'react';
import { Button } from '@material-ui/core';
import thumbnail from '../../../camera.png'



class ProductLayout extends React.Component{
  

	constructor(props){
		super(props);
		this.state = {value: '', info: [], counter: 10};
		

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleButtonChange = this.handleButtonChange.bind(this);
		
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

	}
  
  
	handleSubmit(event) {
		this.componentDidMount();
		
	}
	

 	async componentDidMount(){

		if(this.state.value === ''){
			let link = "http://localhost:8080/allProducts";
			fetch(link)
				.then(response => response.json())
				.then(data => this.setState({info: data, counter:10}))

			
		}
		else{
			let link = "http://localhost:8080/"
			link = link.concat(this.state.value)
			fetch(link)
				.then(response => response.json())
				.then(data => this.setState({info: data}))

		}

		
		
  	}


	render() {

	  return (
			<div class="album py-5 text-center">
				<label class="container text-center">		
					<input class="form-control" type="text" placeholder="Search Product Name" aria-label="Search" value={this.state.value} onChange={this.handleChange}></input>
				</label>
				<input id="search-submit-button" class="btn " type="submit" value="Submit" onClick={this.handleSubmit}></input>
				
				<div class="container pt-4" id="product-container">
					<div class="row">
				  		{this.state.info.slice(0, this.state.counter).map(info => (
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<img class=" card-img-top" width="100%" height="100%" aria-label="Placeholder: Thumbnail" alt="thumbnail"
										src=
										{
											info.thumbnails != null
											? info.thumbnails[0]
											: thumbnail
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