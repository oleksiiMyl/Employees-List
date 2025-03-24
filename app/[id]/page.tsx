import EditEmployeeForm from '@/containers/EditEmployeeForm';
import { getEmployeeById } from '@/services/employeesService';

const EditEmployeePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { employee } = await getEmployeeById(id);
  const { _id, name, position } = employee;

  return <EditEmployeeForm _id={_id} name={name} position={position} />;
};

export default EditEmployeePage;
