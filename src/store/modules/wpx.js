import axios from 'axios';
const state = {
    url_main: 'http://api.openweathermap.org/data/2.5/',
    weather: {},
}

const mutations = {
    setWeather(state, current_weather) {
        state.weather = current_weather
        console.log(state.weather)
    }
}

// Api fetch using axios
const actions = {
    async fetchApiAction({commit}, country) {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country}&unit=metric&appid=1f3cda3b32790247c37903ac750221cb`)
        const current_weather = response.data;
        commit('setWeather', current_weather);
    }
}

const getters = {
    getWeather: (state) => state.weather
}


export default {
    state,
    mutations,
    actions,
    getters
}