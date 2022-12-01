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

site.licences = [];

// console.warn "-> #{site.name}"
url = `https://raw.githubusercontent.com/${site.git.replace("https://github.com/", "")}/master/COPYING`;

request({
  url: url,
  method: 'GET'
}).then(function(body) {
  var lines;
  lines = body.split('\n');
  return lines.forEach(function(line) {
    var licence;
    // console.warn "--#{line}--"
    if (line.trim().startsWith('Copyright')) {
      licence = line.trim()
        .replace(/.*\d{4} /, '')
        .replace(/The/, '')
        .replace(/Developers|developers/, '')
        .trim();
      return site.licences.push(licence);
    }
  });
}).catch(function(err) {
  return console.error(`Fichier non trouvée ${site.name} ${err}`);
}).then(function() {
  return console.log(JSON.stringify(sites, null, 2));
});
