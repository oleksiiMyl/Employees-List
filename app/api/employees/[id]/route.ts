import connectMongoDB from '@/libs/mongodb';
import Employee from '@/models/employee';
import { NextResponse, NextRequest } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { name, position } = await request.json();
  await connectMongoDB();
  await Employee.findByIdAndUpdate(id, { name, position });
  return NextResponse.json({ message: 'Employee updated' }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectMongoDB();
  const employee = await Employee.findOne({ _id: id });
  return NextResponse.json({ employee }, { status: 200 });
}
