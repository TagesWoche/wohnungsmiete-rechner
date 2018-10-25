import React from 'react'

export class SelectMenu extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange = (e) => {
        const district = e.target.value
        this.props.chooseDistrict(district)
    }

    render() {
        return (
            <div className='widget' id={this.props.name}>
                <h3>{this.props.title}</h3>
                <div className='profil-form__select'>
                    <select name={this.props.name} onChange={ this.handleChange } value={this.props.selected}>
                        {this.props.options.map((d) => {
                            return <option key={d}>{d}</option>
                        })}
                    </select>
                </div>
            </div>
        )
    }
}
