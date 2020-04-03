import express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import httpStatus from 'http-status';
import bodyParser from 'body-parser';
import routes from './routes'
const app       = express();
const connUri   = process.env.MONGO_CONN_URL;
const apiVersion = process.env.API_VERSION
class ExpressApp {
	constructor() {
        
		mongoose.connect(connUri, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
				useCreateIndex:true,
				useFindAndModify: false		
            })
            .then(() =>{
        
                console.log('Database MONGO been connected successfully.')
                app.emit('ready');
            })
            .catch(err => {
            console.log(`DB MONGO Connection Error: ${err.message}`);
		});
		
		this.setMiddleware();
		this.helmetSecurity();
		this.setErrorHandler();
		return app;
	}

	setMiddleware() {
		app.disable('x-powered-by');
		app.use(compression());
		app.use(cors());
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true })); 
		app.use(apiVersion , routes);
	}

	helmetSecurity = () => {
		const SIX_MONTHS = 15778476000;
		app.use(helmet.hidePoweredBy());
		app.use(helmet.frameguard());
		app.use(helmet.xssFilter());
		app.use(helmet.noSniff());
		app.use(helmet.ieNoOpen());
		app.use(
			helmet.hsts({
				maxAge: SIX_MONTHS,
				includeSubDomains: true,
				force: true,
			}),
		);
	};


	setErrorHandler() {
		app.use((err, req, res, next) => {
			let errMsg = '';
			if (err.errors) {
				const keys = Object.keys(err.errors);
				if (keys && keys.length && err.errors[keys[0]] && err.errors[keys[0]].message) {
					errMsg = err.errors[keys[0]].message;
				}
			}
			let response = {};
			response = {
				status: err.code || 500,
				message: errMsg || err.message || httpStatus[err.code],
				success: false,
				errors: err.errors,
			};

			if (process.env.NODE_ENV === 'development') {
				response.stack = err.stack;
			}

			res.status(response.status)
				.json(response)
				.end();
		});
	}

}
export default new ExpressApp();
