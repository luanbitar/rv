const totalMiddleware = store => next => action => {
  console.log("Total: ", store.getState())
  next(action)
}

export default totalMiddleware