import React from 'react'

export class RadioButtons extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange = (e) => {
        const radioValue = e.target.value
        this.props.radioClick(radioValue)
    }

    render() {
        return (
            <div id={this.props.name} className='widget switch-field'>
                <h3>{this.props.title}</h3>
                {this.props.options.map((d) => {
                    return (
                        <span>
                            <input onChange={ this.handleChange }
                                name={this.props.name}
                                type='radio'
                                value={d}
                                id={d}
                                key={d}
                                checked = {this.props.checkedBox === d} />
                            <label htmlFor={d} key={d}>{d}</label>
                        </span>
                    )
                })}
            </div>
        )
    }
}
