import { useReducer } from 'react';
import { ToastsState, toastReducer } from './reducer';

const initialState: ToastsState = {
  toasts: [],
};

export const useToast = () => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  return { ...state, dispatch };
};
