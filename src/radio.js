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
                        <span key={d}>
                            <input onChange={ this.handleChange }
                                name={this.props.name}
                                type='radio'
                                value={d}
                                id={d}
                                checked = {this.props.checkedBox === d} />
                            <label htmlFor={d}>{d}</label>
                        </span>
                    )
                })}
            </div>
        )
    }
}
