const tableBody = document.getElementById('table-body')


const get_flight_arrivals = () => {
    fetch('arrivals.json')
        .then(response => response.json())
        .then((arrival_flights) => {
            populateTableArrivals(arrival_flights);
        })
    }
get_flight_arrivals()


const populateTableArrivals = (arrival_flights) => {
    for (const flight of arrival_flights) {
        const tableRow = document.createElement('tr')
        // const tableIcon = document.createElement('td')
        // tableIcon.textContent = '🛫'
        // tableRow.append(tableIcon)

        const flightDetails = {
            time: flight.estimadedhour.slice(0, 5),
            origin: flight.origin,
            airline: flight.acronym,
            flight: flight.flightNumber,
            terminal: flight.terminal,
            remarks: flight.state
        }
        console.log(flightDetails)

        for (const flightDetail in flightDetails) {
            const tableCell = document.createElement('td')
            const word = Array.from(flightDetails[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')
                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow);
    }
}