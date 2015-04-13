module.exports = function(app) {

  var knex = app.get('knex');

  app.get('/', function (req, res) {
    knex.select('*').from('tools').then(function(tools) {
      return res.render('index.hjs', { tools: tools });
    });
  });

  app.post('/', function (req, res) {
    var message;
    var is_valid_url = /^(http|https):\/\/[^ "]+$/.test(req.body.url);
    if (is_valid_url) {
      message = 'Successfully added!';
    } else {
      message = 'That wasn\'t a valid URL. I couldn\'t add it';
    }
    var slug = req.body.name.toLowerCase();
    slug = slug.replace(/\s/g, '_');
    knex('tools').insert({
      name: req.body.name,
      name_slug: slug,
      purpose: req.body.purpose,
      homepage_url: req.body.homepage_url,
      submitter_username: req.body.submitter_username
    }).catch(function(error) {
      message = error;
    });

    knex.select('*').from('tools').then(function(tools) {
      return res.render('index.hjs', { tools: tools, message: message});
    });
  });


};
