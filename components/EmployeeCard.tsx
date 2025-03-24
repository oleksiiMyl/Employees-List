import { ReactElement } from 'react';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

import { EmployeeType } from '@/types/employee';

type EmployeeCardPropsType = {
  employee: EmployeeType;
  index: number;
  children: ReactElement | ReactElement[];
};

const EmployeeCard = ({ employee, index, children }: EmployeeCardPropsType) => {
  return (
    <li className="flex gap-2 p-4 bg-slate-400 rounded-xl">
      <span className="shrink-0 grow-o text-lg font-bold">{index + 1}.</span>
      <span className="min-w-3xs text-lg font-semibold">{employee.name}</span>
      <span className="grow text-lg font-semibold">{employee.position}</span>
      <span className="flex shrink-0 grow-o items-center gap-2">
        <Link
          href={`/${employee._id}`}
          scroll={false}
          className="text-slate-900 hover:text-slate-700 transition"
        >
          <FaEdit size={24} className="color-current" />
        </Link>
        {children}
      </span>
    </li>
  );
};

export default EmployeeCard;
