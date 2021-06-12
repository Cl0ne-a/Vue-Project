const App = {
    data() {
        return {
            counter: 0,
            appTitle: 'Counter'
        }
    }
}

Vue.createApp(App).mount('#app')