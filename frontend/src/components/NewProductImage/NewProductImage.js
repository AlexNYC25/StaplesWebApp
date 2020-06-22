import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'


class NewProductImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {message:'', new_id:null, img_data:null, base64:null, originalName:null}

        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        if(event.target.name === 'product-id'){
            this.setState({
                new_id: event.target.value
            })
        }
    }

    handleImageUpload(event){
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.setState({
                img_data: file,
                base64: reader.result,
                fileName: file.name
            })
        }
    }

    handleSubmit(event){
        event.preventDefault();
        let returnData =  null;

        let formData = new FormData();
        formData.append('productImage', this.state.img_data)
        formData.append('base64String', this.state.base64)
        formData.append('new_id', this.state.new_id)
        formData.append('fileName', this.state.originalName)


        let requestOptions = {
            method: 'POST',
            body: formData
        }

        fetch('http://localhost:8080/products/images', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({message: data.message}))

        if(returnData != null){
            this.setState({message: returnData})
        }

        this.setState({ new_id:null, img_data:null, base64:null, originalName: null})
    }

    render(){
        return (
            <div className='new-data'>
                <form  className='data-options container' enctype="multipart/form-data">
                    <h2>Add an image to a product</h2>
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
                            <Input
                                required
                                name='productImage'
                                color='primary' 
                                type='file' 
                                id='fileSelector'
                                enctype="multipart/form-data"
                                

                                //value={this.state.img_data}
                                onChange={this.handleImageUpload}
                            />
                        <Button
                            variant='contained'
                            color='primary'
                            size='medium'
                            className='col-2 ml-0'
                            type='submit'
                            value='Submit'

                            onClick={this.handleSubmit}

                        >
                            Submit Location
                        </Button>
                    </div>

                </form>

            </div>



        )
    }


}

export default NewProductImage