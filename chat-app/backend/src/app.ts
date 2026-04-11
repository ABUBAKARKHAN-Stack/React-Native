import express from 'express'
import 'dotenv/config'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import cors from 'cors'

const app = express()

//* Enabling CORS
app.use(cors({
    credentials: true,
    origin: true
}))

//* Initialize Better Auth routes
app.all('/api/auth/{*any}', toNodeHandler(auth));

//* Enable JSON and URL-encoded middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//* Create API router for all routes
const apiRouter = express.Router()

//? Mount health check route
import healthCheckRouter from './routes/health-check.route'
apiRouter.use('/health-check', healthCheckRouter)

//* Set global /api prefix
app.use('/api', apiRouter)

//! Global Error Handler
import globalErrorHandler from './middlewares/global-error.middleware';
app.use(globalErrorHandler)

//* Initialize and listen on port
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});