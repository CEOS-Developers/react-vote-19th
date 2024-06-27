'use client';
import { useRouter } from 'next/navigation';

export default function OrLogin() {
  const router = useRouter();
  return (
    <>
      <div
        id="orsignup"
        className="w-full flex justify-center items-center text-black mb-4"
      >
        또는
      </div>
      <div
        id="toSignUpButton"
        className="w-full h-[60px] flex justify-center items-center mb-[60px]"
      >
        <button
          className="w-[108px] h-[42px] rounded-lg bg-white"
          onClick={() => router.push('/login')}
        >
          로그인
        </button>
      </div>
    </>
  );
}
