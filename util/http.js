import axios from 'axios';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL;

export const storeExpense = (data) =>
  axios.post(`${BACKEND_URL}/expenses.json`, data);

export const fetchExpenses = async () => {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };
    expenses.push(expenseObj);
  }

  return expenses;
};
