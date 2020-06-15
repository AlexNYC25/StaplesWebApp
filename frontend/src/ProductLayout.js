
import React from 'react';

// temp json data for proof of concept
const originalInfo = [
	{
	  "_id": "5ecdaa5fe7c0c2f7c182d62b",
	  "index": 0,
	  "age": 30,
	  "eyeColor": "blue",
	  "name": "Josephine Haynes"
	},
	{
	  "_id": "5ecdaa5fcea20e0a2d2f0d35",
	  "index": 1,
	  "age": 23,
	  "eyeColor": "blue",
	  "name": "Georgette Perry"
	},
	{
	  "_id": "5ecdaa5f7e39e9d9fb5d9aac",
	  "index": 2,
	  "age": 32,
	  "eyeColor": "brown",
	  "name": "Katie Larson"
	},
	{
	  "_id": "5ecdaa5faa289c8693dd85c8",
	  "index": 3,
	  "age": 20,
	  "eyeColor": "green",
	  "name": "Horton Montoya"
	},
	{
	  "_id": "5ecdaa5f68ce374247a6ee5d",
	  "index": 4,
	  "age": 31,
	  "eyeColor": "green",
	  "name": "Carolina Little"
	},
	{
	  "_id": "5ecdaa5f068921e94e5e7743",
	  "index": 5,
	  "age": 35,
	  "eyeColor": "green",
	  "name": "Wise Hopkins"
	},
	{
	  "_id": "5ecdaa5fa981b8ac9aa96b1f",
	  "index": 6,
	  "age": 20,
	  "eyeColor": "blue",
	  "name": "Sara Fitzpatrick"
	}
  ];


class ProductLayout extends React.Component{
  

	constructor(props){
		super(props);
		this.state = {value: '', info: []};
		

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}


	/*
	  	Function to constantly change state value based on user input in search bar
	*/
	handleChange(event) {
		this.setState({value: event.target.value});
	
  	}
  
  

	/*
		Pass user input to backend api and get json with products that 
		are found from search results

		Currently when any user input is passed then the 
		state's info is set to an empty array
	*/
	handleSubmit(event) {
		//alert('A name was submitted: ' + this.state.value);
		this.componentDidMount();
		
  	}
  
	/*
		Fetches backend response at certain path and using return data 
		set the state info value as the new data

		TODO:
	  		Test if component will still render content using the same get path '/id'
	*/
 	async componentDidMount(){
		if(this.state.value == ''){
			let link = "http://localhost:8080/";
			fetch(link)
				.then(response => response.json())
				.then(data => this.setState({info: data}))
		}
		else{
			let link = "http://localhost:8080/"
			link = link.concat(this.state.value)
			console.log(link);
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
				<input id="search-submit-button" class="btn" type="submit" value="Submit" onClick={this.handleSubmit}></input>
				<p></p>
				<div class="container pt-4" id="product-container">
					<div class="row">
				  		{this.state.info.map(info => (
							<div class="col-md-4">
								<div class="card mb-4 shadow-sm">
									<img class="bd-placeholder-img card-img-top" width="100%" height="225" aria-label="Placeholder: Thumbnail">
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
			</div>

		);
	}

}

export default ProductLayout;