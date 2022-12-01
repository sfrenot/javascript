var _, request, site, sites, url;

_ = require('lodash');
request = require('request-promise');
sites = require('./liste.json');

site = _.find(sites, function(site) {
  return site.git != null;
});

if (site == null) {
  console.error("Crawl Terminé");
  process.exit(1);
}

site.ports = [];

// console.warn "-> #{site.name}"
url = `https://raw.githubusercontent.com/${site.git.replace("https://github.com/", "")}/master/README.md`;

request({
  url: url,
  method: 'GET'
}).then(function(body) {
  var lines;
  lines = body.split('\n');
  return lines.forEach(function(line) {
    var licence;
    // console.warn "--#{line}--"
    if (/port/.test(line)) {
      port = line.match(/\d{4}/)[0]
      return site.ports.push(port)
    }
  });
}).catch(function(err) {
  return console.error(`Fichier non trouvée ${site.name} ${err}`);
}).then(function() {
  return console.log(JSON.stringify(sites, null, 2));
});
