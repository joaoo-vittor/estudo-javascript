exports.middlewareGlobal = (req, res, next) => {
  res.locals.varialvelLocal = 'Uma variavel Local: middlewareGlobal';
  next();
}

exports.outroMiddlewareGlobal = (req, res, next) => {
  res.locals.nestaRota = 'Estou apenas nessa rota';
  next();
}

