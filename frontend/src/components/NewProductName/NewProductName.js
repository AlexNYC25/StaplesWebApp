import React from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewProductName extends React.Component {
    constructor(props){
        super(props)
        this.state = {message: '', new_id:'', new_name:''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){

        if(event.target.name === 'product-id'){
            this.setState({
                new_id: event.target.value
            })
        }
        if(event.target.name === 'product-name'){
            this.setState({
                new_name: event.target.value
            })
        }

    }

    handleSubmit(event){

        this.setState({message: ''})

        if(this.state.new_id === null || this.state.new_id === '' || this.state.new_name === null || this.state.new_name === ''){
            this.setState({message: "Error: One or more pieces of data are not filled in"})
            return;
        }

        //alert('Attempting to change the name of product id: '.concat(this.state.new_id, ' with new name ', this.state.new_name))
        event.preventDefault();

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: this.state.new_id, name: this.state.new_name})
        };

        this.setState({new_id: '', new_name: ''})


        fetch('http://localhost:8080/products/rename', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({message : data.message}))

        
    }

    render() {
        return (
            <div className="new-data">

                <form className="data-options container">
                    <h2>Change a product Name</h2>
                    <div className="row">
                        <TextField
                            required
                            name='product-id'
                            label='Product ID'
                            type='number'
                            variant='outlined'
                            className='col-4'

                            value={this.state.new_id}
                            onChange={this.handleChange}
                        />  
                        <TextField
                            required
                            name='product-name'
                            label='New Product Name'
                            variant='outlined'
                            className='col-8'
                            
                            value={this.state.new_name}
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className='row'>
                        <Button
                            variant='contained'
                            color='primary'
                            size='medium'
                            className='col-3 ml-0'
                            type='submit'
                            value='Submit'

                            onClick={this.handleSubmit}
                        >
                            Change Product Name
                        </Button>
                    </div>
                    <p className='h3'>
                        {this.state.message}
                    </p>

                </form>
            </div>
        )
    }
}

export default NewProductName