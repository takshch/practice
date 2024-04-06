import { emitter } from './emitter';
import { Event, Toast } from './type';

export const toast = ({ ...toast }: Omit<Toast, 'id'>) =>
  emitter.emit(Event.SHOW, {
    id: Math.random().toString(36).substr(2, 10),
    ...toast,
  });
