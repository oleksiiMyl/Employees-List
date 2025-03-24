import Link from 'next/link';
import { BsFillPeopleFill } from 'react-icons/bs';

import RemoveEmployeeButton from '@/containers/RemoveEmployeeButton';
import { EmployeeType } from '@/types/employee';
import { getEmployees } from '@/services/employeesService';
import EmployeeCard from '@/components/EmployeeCard';

const Home = async () => {
  const { employees }: { employees: EmployeeType[] } = await getEmployees();

  return (
    <>
      <header className="flex items-center gap-x-4 rounded-xl p-6 shadow-sm bg-slate-900 text-white">
        <BsFillPeopleFill size={48} />
        <h1 className="font-bold text-lg uppercase tracking-widest">Employee list</h1>
        <Link
          href="/new"
          className="ms-auto px-4 py-2 border border-current rounded-sm hover:bg-slate-700 transition"
          scroll={false}
        >
          Add New
        </Link>
      </header>
      <ul className="my-4 flex flex-col gap-2">
        {employees.map((employee, index) => (
          <EmployeeCard employee={employee} index={index} key={employee._id}>
            <RemoveEmployeeButton id={employee._id} name={employee.name} />
          </EmployeeCard>
        ))}
      </ul>
    </>
  );
};

export default Home;
