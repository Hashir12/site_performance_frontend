import {useRouter} from 'vue-router';

export default function authMiddleware({ next }) {
    const router = useRouter();
    const token = localStorage.getItem('token');

    if (!token) {
        return next(router.replace('/login'));
    }
    return next();
}
