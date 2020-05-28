import * as express from 'express';

export const requestLogger = (req: express.Request, resp: express.Response, next: express.NextFunction) => {
  console.info(`${req.method} ${req.originalUrl}`);
	const start = new Date().getTime();
	resp.on('finish', () => {
		const elapsed = new Date().getTime() - start;
		console.info(`${req.method} ${req.originalUrl} ${resp.statusCode} ${elapsed}ms`);
	});
	next();
};

export default requestLogger;