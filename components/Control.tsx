type ControlPropsType = {
  label: string;
  linkingId: string;
  // eslint-disable-next-line
  [restProps: string]: any;
};

const Control = ({ label, linkingId, ...restProps }: ControlPropsType) => (
  <div>
    <label htmlFor={linkingId}>{label}</label>
    <input
      {...restProps}
      required
      id={linkingId}
      className="block h-8 w-full rounded-sm bg-slate-600 px-2 border border-transparent outline-none focus:border-white"
    />
  </div>
);

export default Control;
