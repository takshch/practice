import { useMemo } from 'react';
import styled from 'styled-components';
import { Toast, XPos, YPos } from './type';
import React from 'react';

type ToastProps = Toast & {
  remove: (id: number) => void;
};

function ToastItem({ id, x, y, message, remove }: ToastProps) {
  const Wrapper = styled.div`
    position: absolute;
    top: ${y === YPos.TOP ? '10px' : 'unset'};
    bottom: ${y === YPos.BOTTOM ? '10px' : 'unset'};
    left: ${x === XPos.LEFT ? '10px' : 'unset'};
    right: ${x === XPos.RIGHT ? '10px' : 'unset'};
    display: flex;
    gap: 8px;
    font-size: bold;
    padding: 4px 6px;
  `;

  return (
    <Wrapper>
      {message}
      <button onClick={() => remove(id)}>X</button>
    </Wrapper>
  );
}

export default ToastItem;
