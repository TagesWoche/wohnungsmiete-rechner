import React from 'react'

export class Slider extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        const size = e.target.value
        this.props.sliderMove(size)
    }

    render() {
        return (
            <div id={this.props.name} className='widget'>
                <h3>{this.props.title}: <span>{this.props.value}</span></h3>
                <input className='slider'
                    type='range' min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.props.value}
                    onChange={ this.handleChange } />
            </div>
        )
    }
}
