const Login = require('../models/LoginModels');


exports.index = (req, res, next) => {
  if(req.session.user) return res.render('logado');
  res.render('login');
};


exports.register = async (req, res, next) => {
  try {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => {
        return res.redirect('/login');
      });
      return;
    }

    req.flash('success', 'Seu usuario foi criado com sucesso.');
    req.session.save(() => {
      return res.redirect('/login');
    });
  } catch(err) {
    console.log(err);
    return res.render('404');
  }

};


exports.login = async (req, res, next) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => {
        return res.redirect('/login');
      });
      return;
    }

    req.flash('success', 'Usuário logado com sucesso.');
    req.session.user = login.user;
    req.session.save(() => {
      return res.redirect('/login');
    });
  } catch(err) {
    console.log(err);
    return res.render('404');
  }

};


exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
}
