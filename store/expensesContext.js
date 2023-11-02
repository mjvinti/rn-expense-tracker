import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ amount, date, description }) => {},
  deleteExpense: (id) => {},
  setExpenses: (expenses) => {},
  updateExpense: (id, { amount, date, description }) => {}
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      return action.payload.reverse();
    case 'UPDATE':
      const itemIdx = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[itemIdx];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[itemIdx] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (data) => dispatch({ type: 'ADD', payload: data });

  const deleteExpense = (id) => dispatch({ type: 'DELETE', payload: id });

  const updateExpense = (id, data) =>
    dispatch({ type: 'UPDATE', payload: { id, data } });

  const setExpenses = (expenses) =>
    dispatch({ type: 'SET', payload: expenses });

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
    setExpenses
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
