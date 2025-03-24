'use client';
import { useState, FC } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { deleteEmployee } from '@/services/employeesService';
import Overlay from '@/components/Overlay';

type RemoveEmployeeButtonType = {
  id: string;
  name: string;
};

const RemoveEmployeeButton: FC<RemoveEmployeeButtonType> = ({ id, name }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteEmployee(id);

      if (res.ok) {
        router.refresh();
      } else {
        throw new Error('Failed to delete an employee');
      }
    } catch (error) {
      console.log(error);
    }

    setModalIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="text-slate-900 hover:text-slate-700 transition cursor-pointer"
      >
        <FaRegTrashAlt size={24} className="color-current" />
      </button>
      {modalIsOpen && (
        <Overlay>
          <div className="absolute flex flex-col items-center gap-4 w-md p-8 bg-slate-400 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Delete Employee?</h2>
            <p>
              Confirm deletion of employee <span className="font-semibold">"{name}"</span>
            </p>
            <div className="flex gap-4 w-full text-white">
              <button
                onClick={handleCloseModal}
                className="grow-1 h-8 cursor-pointer border rounded-sm bg-slate-800 border-none outline-none transition hover:bg-slate-700 focus:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="grow-1 h-8 cursor-pointer border rounded-sm bg-slate-800 border-none outline-none transition hover:bg-slate-700 focus:bg-slate-700"
              >
                Delete
              </button>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default RemoveEmployeeButton;
