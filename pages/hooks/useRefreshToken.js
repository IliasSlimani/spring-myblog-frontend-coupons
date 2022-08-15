import axios from '../api/axios';
import { useAuth } from '../context/AuthContext';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/api/token/refresh', {
            withCredentials: true
        });
        
        setAuth(response.data.access_token);
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;
