import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class CardItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.person.card }</p>
            </div>
        )
    }
}

CardItem.propTypes = {
    card: PropTypes.object.isRequired
}
  

export default CardItem