import axios from '../api/axios';
import { useAuth } from '../context/AuthContext';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/api/token/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access_token);
            return { ...prev, access_token: response.data.access_token }
        });
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;