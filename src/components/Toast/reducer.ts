import { Toast } from './type';

export enum ToastActionsTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  REMOVE_ALL = 'REMOVE_ALL',
}

export type ToastActions =
  | { type: ToastActionsTypes.ADD; toast: Toast }
  | { type: ToastActionsTypes.REMOVE; id: number }
  | { type: ToastActionsTypes.REMOVE_ALL };

export interface ToastsState {
  toasts: Toast[];
}

export const toastReducer = (
  state: ToastsState,
  action: ToastActions
): ToastsState => {
  switch (action.type) {
    case ToastActionsTypes.ADD:
      return {
        toasts: [...state.toasts, action.toast],
      };
    case ToastActionsTypes.REMOVE:
      return {
        toasts: [...state.toasts.filter(({ id }) => action.id !== id)],
      };
    case ToastActionsTypes.REMOVE_ALL:
      return {
        toasts: [],
      };
    default:
      throw new Error('You can not dispatch unlisted action type');
  }
};
