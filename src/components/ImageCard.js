import React from'react';

export default class ImageCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {spans : 0 };

        this.imageref = React.createRef();
    }

    componentDidMount = () => {
        console.log(this.imageref.current); 

        this.imageref.current.addEventListener('load' , this.setSpans);
    }

    setSpans =  () => {
        const height = this.imageref.current.clientHeight;
        console.log("height",height);
        const spans =  Math.ceil(height/10);
        this.setState({spans});
    };
    render = () => {
        const {description ,urls} = this.props.image;
        

        return(
            <div  style = {{gridRowEnd:`span ${this.state.spans}`}}>
                <img alt={description}
                    src={urls.regular}
                    ref = {this.imageref}
                />
            </div>
        );
    }
}