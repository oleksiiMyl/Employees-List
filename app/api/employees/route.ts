import { NextResponse, NextRequest } from 'next/server';
import connectMongoDB from '@/libs/mongodb';
import Employee from '@/models/employee';

export async function POST(request: NextRequest) {
  const { name, position } = await request.json();
  await connectMongoDB();
  await Employee.create({ name, position });
  return NextResponse.json({ message: 'Employee Created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const employees = await Employee.find();
  return NextResponse.json({ employees });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Employee.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Employee Deleted' }, { status: 200 });
}
