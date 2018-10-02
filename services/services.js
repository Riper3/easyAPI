module.exports = function(server) {

    server.route({
        method: 'GET',
        path: '/about',
        handler: function (request, h)
        {

            var data =
            {
                description: 'This is a API example using nodejs'
            };
            return data;
        }
    });

    server.route({
        method: 'GET',
        path: '/luckynumber/{day}/{month}/{year}',
        handler: function (request, h)
        {
            const date = parseInt(request.params.day)+'/'+parseInt(request.params.month)+'/'+parseInt(request.params.year);
            const day = parseInt(request.params.day);
            const month = parseInt(request.params.month);
            const year = parseInt(request.params.year);

            var datehours = (new Date() / 1000) / 3600;
            var currentday = Math.trunc(datehours / 24);

            var rawluckynumber = Math.trunc((day + year / month) * currentday);
            var luckynumber = String(rawluckynumber).slice(-2);

            var rawlotterynumber = String(rawluckynumber).slice(-4);
            var lotterynumber = rawlotterynumber * 13;
            if (String(lotterynumber).length != 5)
            {
              lotterynumber = "Today you shouldn't play the lottery";
            }

            var checkdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

            if(checkdate.test(date))
            {
              var result =
              {
                  luckytodaynumber : luckynumber,
                  lotterynumber : lotterynumber
              };
            }
            else
            {
              var result =
              {
                  mesagge : 'Check the date'
              };
            }

            return result;
        }
    });

    server.route({
        method: 'GET',
        path: '/horoscope/{horoscope}',
        handler: function (request, h)
        {
            const horoscope = request.params.horoscope;

            const horoscopes = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

            if((horoscopes.indexOf(horoscope) > -1))
            {
              var result =
              {
                  mesaggetoday : horoscope
              };
            }
            else
            {
              var result =
              {
                  error : horoscope+" isn't a horoscope ..."
              };
            }
          return result;
        }

    });
}
