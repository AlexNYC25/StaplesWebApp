import React from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewProductPrice extends React.Component {
    constructor(props){
        super(props)
        this.state = {message: '', new_id:'', new_price:''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        if(event.target.name === 'product-id'){
            this.setState({
                new_id: event.target.value
            })
        }

        if(event.target.name === 'product-price'){
            this.setState({
                new_price: event.target.value
            })
        }
    }

    handleSubmit(event){
        if(this.state.new_id === null || this.state.new_id === '' || this.state.new_price === null || this.state.new_price === ''){
            this.setState({message: "Error: One or more pieces of data are not filled in"})
            return;
        }

        event.preventDefault();

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: this.state.new_id, price: this.state.new_price})
        }

        this.setState({new_id:'', new_price:''})

        fetch('http://localhost:8080/products/price', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({message: data.message}))

    }

    render(){
        return (
            <div className='new-data'>
                <p className='h2'>
                    Add or Change Price of Product
                </p>
                <form className=' data-options container'>
                    <div class='row'>
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
                        name='product-price'
                        label='New Product Price'
                        variant='outlined'
                        className='col-8'

                        value={this.state.new_price}
                        onChange={this.handleChange}


                    />
                    <Button
                        variant='contained'
                        color='primary'
                        size='medium'
                        className='col-3 ml-0'
                        type='submit'
                        value='Submit'

                        onClick={this.handleSubmit}

                    >
                        Change Product Price
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

export default NewProductPrice;