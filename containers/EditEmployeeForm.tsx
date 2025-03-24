'use client';

import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { EmployeeType } from '@/types/employee';
import { updateEmployee } from '@/services/employeesService';
import Control from '@/components/Control';
import { FORM_CLASSNAME, FORM_ACTION_CLASSNAME } from '@/constants/actionClassNames';

const EditEmployeeForm = ({ _id, name, position }: EmployeeType) => {
  const [newName, seNewName] = useState(name);
  const [newPosition, setNewPosition] = useState(position);
  const router = useRouter();

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    seNewName(value);
  };

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setNewPosition(value);
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await updateEmployee(_id, newName, newPosition);

      if (!res.ok) {
        throw new Error('Failed to update an employee');
      }

      router.refresh();
      router.push('/', { scroll: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={FORM_CLASSNAME}>
      <Control
        label="Name"
        linkingId="Name"
        required
        maxLength="25"
        value={newName}
        onChange={handleChangeName}
      />
      <Control
        label="Position"
        linkingId="Position"
        required
        maxLength="30"
        value={newPosition}
        onChange={handleChangePosition}
      />
      <div className="flex gap-4 mt-4">
        <Link href="/" className={FORM_ACTION_CLASSNAME} scroll={false}>
          Cancel
        </Link>
        <button className={FORM_ACTION_CLASSNAME}>Update</button>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
