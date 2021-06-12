const App = {
    data() {
        return {
            placeholderString: 'Input note Title',
            appTitle: 'Notes List',
            inputVal: ''
        }
    }
}

Vue.createApp(App).mount('#app')