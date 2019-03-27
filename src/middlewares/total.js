const totalMiddleware = store => next => action => {

  next(action)
}

export default totalMiddleware