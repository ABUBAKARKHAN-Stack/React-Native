import express from 'express'
import 'dotenv/config'
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

const app = express()

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
import globalErrorHandler from './middlewares/global-error.middleware';
apiRouter.use('/health-check', healthCheckRouter)

//* Set global /api prefix
app.use('/api', apiRouter)

//* Initialize and listen on port
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});