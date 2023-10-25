import axios from 'axios';

export const storeExpense = (data) => {
  axios.post(`${process.env.EXPO_PUBLIC_API_URL}/expenses.json`, data);
};
