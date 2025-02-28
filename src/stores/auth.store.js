import {defineStore} from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loader: false,
        error: null,

    }),
    actions: {
        async authenticate(form, type) {
            if (!form || !type) return;

            this.loader = true;
            this.error = null;

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/${type}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(type === 'register'
                        ? {name: form.name, email: form.email, password: form.password}
                        : {email: form.email, password: form.password}
                    )
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Authentication failed.');
                }

                const data = await response.json();
                localStorage.setItem('token', data.token);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loader = false;
            }
        },

        async googleLogin() {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/google-auth");
                const data = await response.json();

                if (!data.url) {
                    throw new Error("Invalid response from server.");
                }
                window.location.href = data.url;
            } catch (error) {
                console.error("OAuth Error:", error.message);
            }
        },
    }
});
