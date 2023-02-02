import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(url)
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => {
      console.error('failed to connect with mongo error => ', err);
    });
};

export default connectDB;
