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
            slides: [
                (<img width="300px" src="http://4.bp.blogspot.com/-w8U75TCuhgU/Tzw8TmaclvI/AAAAAAAABJ0/6fMMcRLAceM/s1600/Rabbit3.jpg" />),
                (<img width="300px"  src="https://shop-resources.prod.cms.tractorsupply.com/resource/image/18248/portrait_ratio3x4/595/793/4c37b7f6d6f9d8a5b223334f1390191b/JJ/ten-reasons-not-to-buy-an-easter-bunny-main.jpg" />),
                ( <img width="300px"  src="https://storage.googleapis.com/scratchpay-com-assets/images/How%20Much%20Is%20a%20Pet%20Bunny/how_much_is_a_pet_bunny.jpg" />)
            ],
        }
        this.onchange = this.onchange.bind(this);

    }

    onchange(value){
        //console.log(value)
        // restarts dots position
        if(value >= 3){
            value = 0
        }

        this.setState({value})
    }

    async componentDidMount(){

    }

    render() {
        return (
            <div>
                <Carousel
                    value={this.state.value}
                    slides={this.state.slides}
                    onChange={this.onchange}
                    autoPlay={2000}
                    animationSpeed={1000}
                    arrows
                    infinite
                >
                
                
        
                </Carousel>
                <Dots
                    index={this.state.value}
                    count={3}
                    onDotClick={(index) => this.setState({index})}
                >

                </Dots>
            </div>
        )
    }
}

//ReactDOM.render(<ProductCarousel />, document.querySelector('.carousel'))
//ReactDOM.render(<Carousel />, document.querySelector('.demo-carousel'));

export default ProductCarousel;