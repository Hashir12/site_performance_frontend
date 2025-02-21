import {defineStore} from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        loader: false,
        error: null,
        performance: null,
        flag: true
    }),

    getters: {},
    actions: {
        async checkPerformance(form) {
            if (form) {
                this.loader = true;
                this.error = null;
                const token = localStorage.getItem('token')

                const response = await fetch('http://127.0.0.1:8000/api/track-performance', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(form)
                })
                const data = await response.json();

                if (!data.data) {
                    this.loader = false
                    throw new Error('Authentication failed.');
                } else {
                    this.loader = false
                    this.flag = false
                    this.performance = data.data
                }
            }
        }
    },
})