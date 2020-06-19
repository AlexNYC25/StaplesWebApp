import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Dots from 'material-ui-dots'


import './App.css'

/*
    Need to center material dots
*/

class ProductCarousel extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.ProductID,
            value: 0,
        }

        this.onchange = this.onchange.bind(this);

    }

    onchange(value){
        // restarts dots position
        if(this.props.Images){
            if(value >= this.props.Images.length){
                value = 0
            }
        }
        else{
            value = 0
        }
        

        this.setState({value})
    }



    render() {
        return (
            <div>
                <Carousel
                    value={this.state.value}
                    onChange={this.onchange}
                    autoPlay={2000}
                    animationSpeed={2000}
                    arrows
                    infinite
                >
                    
                
                    {
                        this.props.Images
                            ?this.props.Images.map(img => <img width="300px" height="150px" src={img}></img>)
                            : <img  src='https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif' />
                    }
                
        
                </Carousel>
                
            </div>
        )
    }
}

//ReactDOM.render(<ProductCarousel />, document.querySelector('.carousel'))
//ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));

export default ProductCarousel;