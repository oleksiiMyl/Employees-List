'use client';

import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { createEmployee } from '@/services/employeesService';
import Control from '@/components/Control';
import { FORM_CLASSNAME, FORM_ACTION_CLASSNAME } from '@/constants/actionClassNames';

const AddNewEmployeePage = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const router = useRouter();

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setPosition(value);
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await createEmployee(name, position);

      if (res.ok) {
        router.push('/', { scroll: false });
      } else {
        throw new Error('Failed to create an employee');
      }
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
        value={name}
        onChange={handleChangeName}
      />
      <Control
        label="Position"
        linkingId="Position"
        required
        maxLength="30"
        value={position}
        onChange={handleChangePosition}
      />
      <div className="flex gap-4 mt-4">
        <Link href="/" className={FORM_ACTION_CLASSNAME} scroll={false}>
          Cancel
        </Link>
        <button className={FORM_ACTION_CLASSNAME}>Create</button>
      </div>
    </form>
  );
};

export default AddNewEmployeePage;
