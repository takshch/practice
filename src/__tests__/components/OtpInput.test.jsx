import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import OtpInput from '../../components/OtpInput';

describe('OtpInput Component', () => {
  it('renders four input boxes', async () => {
    render(<OtpInput />);

    const elements = screen.getAllByTestId('otp-input');
    expect(elements.length).toBe(4)
  })

  it('first input should be focused on initial render', async () => {
    render(<OtpInput />);

    const elements = screen.getAllByTestId('otp-input');
    expect(elements[0]).toHaveFocus();
  })

  it('fill all otp input and get otp', async () => {
    let otp = '';

    render(<OtpInput onFinal={(o) => { otp = o }} />);

    const elements = screen.getAllByTestId('otp-input');

    expect(elements[0]).toHaveFocus();
    fireEvent.change(elements[0], { target: { value: '1' } })

    expect(elements[1]).toHaveFocus();
    fireEvent.change(elements[1], { target: { value: '2' } })

    expect(elements[2]).toHaveFocus();
    fireEvent.change(elements[2], { target: { value: '3' } })

    expect(elements[3]).toHaveFocus();
    fireEvent.change(elements[3], { target: { value: '4' } })

    expect(otp).toBe('1234');
  })
})
