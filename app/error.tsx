'use client';
import { useEffect } from 'react';

import Overlay from '@/components/Overlay';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReset = () => {
    reset();
  };

  return (
    <Overlay>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl text-white">Something went wrong!</h2>
        <button
          onClick={handleReset}
          className="border border-white px-4 py-2 rounded-sm max-w-30 text-white cursor-pointer outline-none hover:bg-slate-600 focus:bg-slate-600 transition"
        >
          Try again
        </button>
      </div>
    </Overlay>
  );
}
