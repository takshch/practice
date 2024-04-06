import { useEffect, useMemo, useRef, useState } from 'react';

type OtpInputProps = {
  onFinal?: (otp: string) => void;
};

function OtpInput({ onFinal }: OtpInputProps) {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRefs = useMemo(
    () => [inputRef1, inputRef2, inputRef3, inputRef4],
    []
  );

  const [currentInputId, setCurrentInputId] = useState<number>(0);
  const [values, setValues] = useState<{ [key: string]: string }>({
    '0': '',
    '1': '',
    '2': '',
    '3': '',
  });
  const otpChunks = useRef<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const id = target.getAttribute('data-input-id');
    if (!id) return;

    const isNumber = /^[0-9]$/i.test(target.value);
    if (isNumber) {
      if (otpChunks.current.length !== inputRefs.length) {
        otpChunks.current.push(value);
        setValues((values) => ({ ...values, [id]: value }));
      }

      if (currentInputId < inputRefs.length - 1) {
        setCurrentInputId((currentInputId) => currentInputId + 1);
        return;
      }

      if (currentInputId === inputRefs.length - 1) {
        const otp = otpChunks.current.join('');
        onFinal?.(otp);
      }
    } else {
      if (value === '') {
        if (currentInputId === 0) {
          otpChunks.current.pop();
          setValues((values) => ({ ...values, [id]: '' }));
          return;
        }

        if (currentInputId === otpChunks.current.length) {
          setCurrentInputId((currentInputId) => currentInputId - 1);
        } else {
          otpChunks.current.pop();
          setValues((values) => ({ ...values, [id]: '' }));
        }
      }
    }
  };

  useEffect(() => {
    inputRefs[currentInputId].current?.focus();
  }, [inputRefs, currentInputId]);

  return (
    <div className="flex flex-col items-center gap-7 px-4 py-5 border-2 border-slate-200 rounded-2xl">
      Please Enter OTP
      <div className="flex gap-5 items-center">
        <input
          type="text"
          data-input-id={0}
          ref={inputRef1}
          maxLength={1}
          value={values['0']}
          className="flex items-center border border-slate-800 rounded px-2 py-1 w-7"
          onChange={onChange}
          data-testid="otp-input"
        />
        <input
          type="text"
          data-input-id={1}
          ref={inputRef2}
          maxLength={1}
          value={values['1']}
          className="flex items-center border border-slate-800 rounded px-2 py-1 w-7"
          onChange={onChange}
          data-testid="otp-input"
        />
        <input
          type="text"
          data-input-id={2}
          ref={inputRef3}
          maxLength={1}
          value={values['2']}
          className="flex items-center border border-slate-800 rounded px-2 py-1 w-7"
          onChange={onChange}
          data-testid="otp-input"
        />
        <input
          type="text"
          data-input-id={3}
          ref={inputRef4}
          maxLength={1}
          value={values['3']}
          className="flex items-center border border-slate-800 rounded px-2 py-1 w-7"
          onChange={onChange}
          data-testid="otp-input"
        />
      </div>
    </div>
  );
}

export default OtpInput;
