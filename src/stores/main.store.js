import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({}),
    getters: {},
    actions: {
        checkPerformance(form) {
            if (form) {
                const token = localStorage.getItem('token')

                fetch('apki-api', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(form)
                })
            }
        }
    },
})