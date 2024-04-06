import { Event } from './type';

export type Handler<T = any> = (event: T) => void;

export const emitter = (() => {
  const events = new Map();

  return {
    on<T>(event: Event, callback: Handler<T>) {
      if (!events.has(event)) events.set(event, []);
      events.get(event).push(callback);
    },

    emit<T>(event: Event, args: T) {
      if (!events.has(event)) return;
      events.get(event).forEach((cb: Handler<T>) => cb(args));
    },

    off() {
      events.clear();
    },
  };
})();
