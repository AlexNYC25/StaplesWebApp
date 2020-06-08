import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Navbar from './Navbar'

class NewProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {message: '', new_id: '', new_name: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        if(event.target.name == 'id-number'){
            this.setState({
                new_id :event.target.value
            })
        }
        if(event.target.name == 'product-name'){
            this.setState({
                new_name: event.target.value
            })
        }
    }


    handleSubmit(event){
        // from here we submit to the api and get a status message back
        alert('Attempting to input product '.concat(this.state.new_id, ' with name ', this.state.new_name))
    }

    render(){
        return (
            <div className="">
                <Navbar />
                
                <form className="data-options container">
                    <h2>Add a new Product</h2>
                    <div className="row">
                        <TextField
                            required
                            name="id-number"
                            label="Product ID"
                            type="number"
                            variant="outlined"
                            className="col-4"

                            value={this.state.new_id}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            name="product-name"
                            label="Product Name"
                            variant="outlined"
                            className="col-8"

                            value={this.state.new_name}
                            onChange={this.handleChange}

                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className="col-3 ml-0"
                        type="submit"
                        value="Submit"

                        onClick={this.handleSubmit}
                    >
                        Submit Product
                    </Button>
                
                    <p id="status-message">
                        {this.state.message}
                    </p>
                </form>
                

            </div>
        )
    }
}

export default NewProduct;