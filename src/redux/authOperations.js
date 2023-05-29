import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk('auth/register', async obj => {
  try {
    const { data } = await axios.post('/users/signup', obj);
    token.set(data.token);
    return data;
  } catch (err) {
    // return thunkAPI.rejectWithValue(err.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async obj => {
  try {
    const { data } = await axios.post('/users/login', obj);
    token.set(data.token);
    return data;
  } catch (err) {
    //   return thunkAPI.rejectWithValue(err.message);
  }
});

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post(`/users/logout`);
      token.unset();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/update',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log(thunkAPI.getState());

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get(`/users/current`);
      return data;
    } catch (err) {
      // return thunkAPI.rejectWithValue(err.message);
    }
  }
);
