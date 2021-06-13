const App = {
    data() {
        return {
            placeholderString: 'Input note Title',
            title: 'Notes List',
            inputVal: '',
            notes: ['some note', 225, 'note 54']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputVal = event.target.value
        },

        addNewNote() {
            this.notes.push(this.inputVal)
        },

        removeNote(idx, event) {
            this.notes.splice(idx, 1)

        }
    }
}

Vue.createApp(App).mount('#app')