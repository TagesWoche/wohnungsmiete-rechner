import React from 'react'
import Odometer from 'react-odometerjs'

export class Result extends React.Component {
    render() {
        return (
            <div id='result' className='widget'>
                <h3>marktübliche Nettomiete in CHF</h3>
                <Odometer value={this.props.price} format='d' />
            </div>
        )
    }
}
