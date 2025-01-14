
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch(next); // Simplified .catch((err) => next(err)) to .catch(next)
  };
};

export { asyncHandler };

