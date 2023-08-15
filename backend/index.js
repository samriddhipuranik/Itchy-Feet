import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
// import paymentRoute from './routes/stripeBook.js';


dotenv.config()
const app = express()
const port = process.env.PORT || 8000;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://itchyfeet.vercel.app'); // Specify the allowed origin
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Specify allowed headers
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Specify allowed HTTP methods

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.status(200).end();
  } else {
    next();
  }
});

const corsOptions = {
    origin: true,
    credentials: true 
}
// connect to db
mongoose.set("strictQuery", false);
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected');
    } catch (err) {
        console.log('MongoDB connection failed', err);
    }
}


// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
// app.use('/api/v1/payments', paymentRoute);

app.listen(port, () =>{
    connect();
    console.log('server listening on port', port);

});
