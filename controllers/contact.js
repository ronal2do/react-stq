var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});

/**
 * GET /contact
 */
exports.contactGet = function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 */
exports.contactPost = function(req, res) {
  req.assert('name', 'Nome não pode estar em branco').notEmpty();
  req.assert('email', 'Este e-mail não é válido').isEmail();
  req.assert('email', 'E-mail não pode estar em branco').notEmpty();
  req.assert('message', 'Mensagem não pode estar em branco').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  var mailOptions = {
    from: req.body.name + ' ' + '<'+ req.body.email + '>',
    to: 'ronal2do@gmail.com',
    subject: '✔ Contato | Mega Boilerplate',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err) {
    res.send({ msg: 'Obrigado.' });
  });
};
