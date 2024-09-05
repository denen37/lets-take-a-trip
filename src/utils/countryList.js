import country_and_states from '../data/country-states';

const countryList = () => {
    let countries = Object.entries(country_and_states.country).map((item, index) => {
        return {
            value: item[0],
            label: item[1]
        }
    });

    return countries
}

const statesList = (countryCode) => {

    return country_and_states.states[countryCode]?.map((item, index) => {
        return {
            value: item.code,
            label: item.name
        }
    });
}

export { countryList, statesList }