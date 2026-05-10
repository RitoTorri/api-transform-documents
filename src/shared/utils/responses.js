export const responseSuccess = (res, { message, code = 200, data = null }) => {
  return res.status(code).json({
    statusCode: code,
    message,
    data,
  });
};

export const responseError = (res, { message, code = 500 }) => {
  return res.status(code).json({ statusCode: code, message });
};
