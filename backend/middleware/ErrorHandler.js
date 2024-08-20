const errorHandler = (err, req, res, next) => {
   const defaultError = {
       statusCode: err.statusCode || 500,
       message: err.message || 'Internal Server Error',
       success: false,
       error: true
   };

   res.status(defaultError.statusCode).json(defaultError);
};

export default errorHandler;