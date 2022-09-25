const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.scrapethissite.com/pages/simple/')
    .then(({ data }) => {
        const $ = cheerio.load(data);

        const countryname = $('.country-name')
            .map((_, country) => {
                const $country = $(country);
                return $country.text().trim();
            })
            .toArray();
        console.log(countryname)
    });