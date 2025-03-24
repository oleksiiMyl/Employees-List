import React from 'react';
import Overlay from '@/components/Overlay';

const Loader = () => (
  <Overlay>
    <span className="text-3xl font-bold text-white tracking-widest animate-bounce ">Loading</span>
  </Overlay>
);

export default Loader;
