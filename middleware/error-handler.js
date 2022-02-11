const {CustomApiError} = require('../errors/customError')
const errorHandler = (err, res, req, next) => {
    if (err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: `there is nothing here`})

}

module.exports = errorHandler