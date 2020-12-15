exports.middlewareGlobal = (req, res, next) => {
  res.locals.varialvelLocal = 'Uma variavel Local: middlewareGlobal';
  next();
};

exports.outroMiddlewareGlobal = (req, res, next) => {
  res.locals.nestaRota = 'Estou apenas nessa rota';
  next();
};


exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
};


exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
