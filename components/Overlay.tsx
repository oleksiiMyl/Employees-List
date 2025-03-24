import { ReactElement } from 'react';

type OverlayPropsType = {
  children: ReactElement | ReactElement[];
};

const Overlay = ({ children }: OverlayPropsType) => (
  <div className="fixed left-0 right-0 top-0 bottom-0 z-1 flex items-center justify-center bg-slate-700/75">
    {children}
  </div>
);

export default Overlay;
