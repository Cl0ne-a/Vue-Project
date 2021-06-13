const App = {
    data() {
        return {
            placeholderString: 'Input note Title',
            title: 'Notes List',
            inputVal: ''
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputVal  = event.target.inputVal
        }
    }
}

Vue.createApp(App).mount('#app')