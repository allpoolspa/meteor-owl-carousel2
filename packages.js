Package.describe({
  summary: 'Owl Carousel2.0.0-beta.3',
  name: "meteor-owlCarousel2",
  version: "2.0.0-beta.3",
  git: "https://github.com/allpoolspa/meteor-owlCarousel2.git"
});

Package.on_use(function (api) {

  api.use('jquery','client');

  api.add_files('assets/owl.carousel.css', 'client');
  api.add_files('assets/owl.carousel.min.css', 'client');
  api.add_files('assets/owl.theme.default.css', 'client');
  api.add_files('assets/owl.theme.default.min.css', 'client');
  api.add_files('lib/owl.carousel.js', 'client');
  api.add_files('lib/owl.carousel.min.js', 'client');

});
