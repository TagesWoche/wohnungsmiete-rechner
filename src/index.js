import { csv } from 'd3-request'
import React from 'react'
import ReactDOM from 'react-dom'

import { Result } from './result'
import { SelectMenu } from './select'
import { RadioButtons } from './radio'
import { Slider } from './slider'

// Application file
class App extends React.Component {
    constructor(props) {
    	super(props)
        // Set initial state
        this.state = {
            data: [],
            quartier: 'Am Ring',
            rooms: '3',
            year: 1922,
            renovated: 'nein',
            size: 60
        }
    }

    componentDidMount() {
        // Load data when the component mounts
        csv('https://interaktiv.tageswoche.ch/2018/wohnungsmiete/mietpreise.csv', (error, data) => {
            	this.setState({
            		data: data
            	})
        })
    }

    chooseDistrict = (newDistrict) => {
        this.setState({
            quartier: newDistrict
        })
    }

    changeRooms = (newRoom) => {
        this.setState({
            rooms: newRoom
        })
    }

    changeRenovation = (newRenovation) => {
        this.setState({
            renovated: newRenovation
        })
    }

    changeSize = (newSize) => {
        this.setState({
            size: newSize
        })
    }

    changeYear = (newYear) => {
        this.setState({
            year: newYear
        })
    }
    render() {
    	// filter
    	let selectedData = this.state.data.filter((d) => {
            return d.quartier === this.state.quartier &&
            d.zimmer === this.state.rooms &&
            d.renoviert === this.state.renovated
        })

        const quartiereAll = [...new Set(this.state.data.map(d => d.quartier))]

        const allRooms = ['1', '2', '3', '4', '5', '6']
        const renovation = ['ja', 'nein']

        let selectedYearRange

        if (this.state.year <= 1920) {
        	selectedYearRange = 'erstellt vor 1920'
        } else if (this.state.year > 1920 && this.state.year <= 1946) {
        	selectedYearRange = 'erstellt 1921-1946'
        } else if (this.state.year > 1946 && this.state.year <= 1960) {
            selectedYearRange = 'erstellt 1947-1960'
        } else if (this.state.year > 1960 && this.state.year <= 1970) {
            selectedYearRange = 'erstellt 1961-1970'
        } else if (this.state.year > 1970 && this.state.year <= 1980) {
            selectedYearRange = 'erstellt 1971-1980'
        } else if (this.state.year > 1980 && this.state.year <= 1990) {
            selectedYearRange = 'erstellt 1981-1990'
        } else if (this.state.year > 1990 && this.state.year <= 2000) {
            selectedYearRange = 'erstellt 1991-2000'
        } else if (this.state.year > 2000 && this.state.year <= 2010) {
            selectedYearRange = 'erstellt 2001-2010'
        } else if (this.state.year > 2010) {
            selectedYearRange = 'erstellt ab 2011'
        }

        let marketPrice = selectedData.map((d) => {
            return d[selectedYearRange] * this.state.size
        })

        let price = marketPrice[0]
        console.log(price)

    	return (
            <div id='wohnpreise'>
                <div id='subtitle' className='widget'>
                    <h2>Wohnen Sie zu teuer?</h2>
                    <p>
                    Tragen Sie alle Informationen ein und berechnen Sie, welche Nettomiete für Ihre Wohnung angebracht wäre.
                    </p>
                </div>

                <SelectMenu name='quartier'
                    title='Quartier'
                    options={quartiereAll}
                    selected={this.state.quartier}
                    chooseDistrict={this.chooseDistrict} />

                <Result price={price} />

                <RadioButtons name='zimmer'
                    title='Anzahl Zimmer'
                    options={allRooms}
                    radioClick={this.changeRooms}
                    checkedBox={this.state.rooms} />

                <RadioButtons name='renovation'
                    title='Renoviert?'
                    options={renovation}
                    radioClick={this.changeRenovation}
                    checkedBox={this.state.renovated} />

                <Slider name='flaeche'
                    title='Fläche'
                    value={this.state.size}
                    min={10}
                    max={300}
                    step={1}
                    sliderMove={this.changeSize} />

                <Slider name='baujahr'
                    title='Baujahr'
                    value={this.state.year}
                    min={1900}
                    max={2018}
                    step={1}
                    sliderMove={this.changeYear} />

    		</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('mietpreisapp')
)

module.hot.accept()
