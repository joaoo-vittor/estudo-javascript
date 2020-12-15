exports.middlewareGlobal = (req, res, next) => {

  if (req.body.nome) {
    console.log(`\nVoce postou: ${req.body.nome}`);
  }

  next();
}

exports.outroMiddlewareGlobal = (req, res, next) => {
  console.log('\noutro middleware!');
  next();
}

