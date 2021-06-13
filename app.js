const App = {
    data() {
        return {
            placeholderString: 'Input note Title',
            title: 'Notes List',
            inputVal: '',
            notes: ['some note', 569, 'note 54']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputVal = event.target.value
        },

        addNewNote() {
            if (this.inputVal !== '') {
                this.notes.push(this.inputVal)
                this.inputVal = ''
            }
        },

        toUpRegister(item) {
            return typeof this.item === 'number' ? typeof this.item : JSON.stringify(item).toUpperCase();
        },

        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#app')