export enum ToastType {
  SUCCESS = '1',
  INFO = '2',
  DANGER = '3',
}

export enum XPos {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum YPos {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export type Toast = {
  id: number;
  type: ToastType;
  message: string;
  timeout: number;
  x: XPos;
  y: YPos;
};

export enum Event {
  SHOW = 'SHOW',
  HIDE_ALL = 'HIDE_ALL',
  HIDE = 'HIDE',
}
