import api from '../http/api';
import Credentials from '../interfaces/credentials';
import TokenData from '../interfaces/token-data';
import User from '../interfaces/user';

const authenticate = async (credentials: Credentials): Promise<TokenData> => {
  const response = await api.post('/authenticate', credentials);
  return response.data as TokenData;
};

const me = async (): Promise<User> => {
  const response = await api.get('/me');
  return response.data as User;
};

export default {
  authenticate,
  me,
};
