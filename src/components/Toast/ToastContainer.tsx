import React, { useCallback, useEffect } from 'react';
import { useToast } from './useToast';
import { Event, Toast } from './type';
import { emitter } from './emitter';
import { ToastActions, ToastActionsTypes } from './reducer';
import ToastItem from './ToastItem';

const registerEvents = ({
  dispatch,
}: {
  dispatch: (action: ToastActions) => void;
}) => {
  emitter.on(Event.SHOW, (toast: Toast) => {
    dispatch({ type: ToastActionsTypes.ADD, toast });

    setTimeout(() => {
      dispatch({ type: ToastActionsTypes.REMOVE, id: toast.id });
    }, toast.timeout);
  });

  emitter.on(Event.HIDE_ALL, () =>
    dispatch({ type: ToastActionsTypes.REMOVE_ALL })
  );

  emitter.emit(Event.HIDE_ALL, () =>
    dispatch({ type: ToastActionsTypes.REMOVE_ALL })
  );
};

function ToastContainer() {
  const { toasts, dispatch } = useToast();

  useEffect(() => {
    registerEvents({ dispatch });

    return () => {
      emitter.off();
    };
  }, [dispatch]);

  const removeToast = useCallback(
    (id: number) => {
      dispatch({ type: ToastActionsTypes.REMOVE, id });
    },
    [dispatch]
  );

  return (
    <div>
      {toasts.map((toast) => (
        <ToastItem {...toast} key={toast.id} remove={removeToast} />
      ))}
    </div>
  );
}

export default ToastContainer;
