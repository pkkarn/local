<template>
    <div id="app1">
        <h1 class="heading">Weather <span>App</span></h1>
        <div class="search-bar">
            <input class="search-box" placeholder="Place Name..." type="name" v-model="country" @keypress="FetchApi">
            <div @click="clickApi" class="search-btn">CHECK</div>
        </div>
        <div class="weather-div" v-if="isWeather"> 
            <h1 class="title">{{Weather.name}} - {{Weather.country}}</h1> 
            <p class="date">{{ currentDateTime }}</p>
            <div class="row">
                <div class="col1">
                    <p>TEMPRATURE</p>
                    <h2 class="temp">{{Weather.temp}}</h2>
                </div>
                <div class="col2">
                    <p>DESCRIPTION</p>
                    <h2>{{Weather.desc}}</h2>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            country: '',
            cw: {},
        }
    },
    methods: {
        FetchApi(e) {
            if (e.key == 'Enter'){
                this.$store.dispatch('fetchApiAction',this.country)
                this.country = ''
            }
        },
        clickApi(){
            this.$store.dispatch('fetchApiAction',this.country)
            this.country = ''
        }
    },

    computed: {
        isWeather() {
            if(Object.keys(this.$store.getters.getWeather).length === 0){
                return false
            }else {
                return true
            }
        },
        Weather() {
            const cw = this.$store.getters.getWeather
            return {
                name: cw.name.toUpperCase(),
                main: cw.weather[0].main,
                desc: cw.weather[0].description,
                temp: (cw.main.temp - 273.15).toFixed(2)+'°C',
                country: cw.sys.country
            }
        },
        currentDateTime(){
            const days = ['Sunday','monday','tuesday','thrusday','friday','saturday']
            const months = ['january','feburary','march','april','may','june','july','august','september','october','november','december']

            const day = days[(new Date().getDay()) - 1].toUpperCase()
            const month = (months[(new Date().getMonth())]).toUpperCase()
            const date = new Date().getDate()
            // const year = new Date().getFullYear()
            // const hour = new Date().getHours()
            // const min = new Date().getMinutes()

            const current_date_time = `${day} ${date},${month}`
            return current_date_time;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
    #app1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Raleway', sans-serif;

    }
    .search-bar{
        display: flex;
    }
    .search-box {
        outline: none;
        border: none;
        padding: 15px;
        /* background: none; */
        background: rgba(0, 0, 0, 0.58);
        /* width: 400px; */
        color: #fff;
        font-family: 'Raleway', sans-serif;
        width: 80%;
    }
    .search-btn{
        width: 20%;
        padding: 15px;
        font-family: 'Raleway', sans-serif;
        color: #333;
        background: rgb(255, 243, 243);
        border-right: 1px solid rgba(51, 51, 51, 0.815); 
        cursor: pointer;
    }
    .search-btn:hover{
        opacity: 0.8;
    }
    .weather-div {
        text-align: center;
        padding: 15px;
        background-image: linear-gradient(rgba(197, 243, 255, 0.87), rgba(255, 255, 255, 0.835));
        border-radius: 0% 0% 5% 5%;
    }
    .title{ 
        font-family: 'Potta One', cursive;
        width: 100%;
        text-align: center;
        color: #333;
    }
    .row{
        border-top: 1px solid rgba(0, 0, 0, 0.746);
        display: flex; 
    }
    .col1,.col2 {
        flex:1;
        text-align:center;
    }
    .col1,.col2 {
        color: #333;
        letter-spacing: 1px;
    }
    .date{
        text-align: center;
        letter-spacing: 2px;
        opacity: 0.6;
    }
</style>