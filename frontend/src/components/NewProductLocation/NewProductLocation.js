import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class NewProductLocation extends React.Component {
    constructor(props){
        super(props);

        this.state = {message:'', new_id:'', new_location:''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(event){

        if(event.target.name === 'product-id'){
            this.setState({
                new_id : event.target.value
            })
        }

        if(event.target.name === 'product-location'){
            this.setState({
                new_location: event.target.value
            })
        }

    }

    handleSubmit(event){

        // resets message
        this.setState({message: ''})

        if(this.state.new_id === null || this.state.new_id === '' || this.state.new_location === null || this.state.new_location === ''){
            this.setState({message: 'Error: One or more pieces of data are not filled in'})
        }

        event.preventDefault();

        let requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id: this.state.new_id, location:this.state.new_location})
        }

        // reset state variable values
        this.setState({new_id: '', new_location: ''})

        fetch('http://localhost:8080/products/locations', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({message: data.message}))


    }

    render(){
        return(
            <div className='new-data'>
                <form className='data-options container'>
                    <h2> Add a Location to a Product</h2>
                    <div className='row'>
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
                            name='product-location'
                            label='New Location'
                            variant='outlined'
                            className='col-8'

                            value={this.state.new_location}
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
                            Submit Location
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

export default NewProductLocation;

