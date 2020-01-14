import React, { Component } from 'react';
import './flat.css';


class Flat extends Component {

    state = {
        showContent : false
    }


    handleClick = () => {

        // Call the Parent Method SelectFlat
        this.props.selectFlat(this.props.flat);
        this.setState({
            showContent: !this.state.showContent
        })
    }

    render() {

        const title = this.props.flat.name + '-' + this.props.flat.price + this.props.flat.priceCurrency ;
        const image = this.props.flat.imageUrl

        const style = {
            backgroundImage: `url('${image}')`
        }

        return(
            <div className="flat" onClick={this.handleClick}>
                <div className="flat-picture" style={style}></div>
                <div className="flat-title">
                    {title}
                </div>
                
                   {this.state.showContent ? <button>Hallo</button> : ''}
            </div>
        );
    }
}

export default Flat