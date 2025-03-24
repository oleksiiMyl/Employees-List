import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
