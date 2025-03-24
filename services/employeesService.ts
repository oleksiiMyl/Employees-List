export const getEmployees = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/employees', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch Employees');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createEmployee = async (name: string, position: string) =>
  await fetch('http://localhost:3000/api/employees', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, position }),
  });

export const deleteEmployee = async (id: string) =>
  await fetch(`http://localhost:3000/api/employees?id=${id}`, {
    method: 'DELETE',
  });

export const getEmployeeById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/employees/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch an Employee');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (id: string, name: string, position: string) =>
  await fetch(`http://localhost:3000/api/employees/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, position }),
  });
