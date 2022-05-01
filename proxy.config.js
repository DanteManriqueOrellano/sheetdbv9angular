module.exports = [
    {
      context: ["/api"],
      target: "https://sheetdbv9express.herokuapp.com/",
      secure: false,
      logLevel: "debug",
      bypass: function (req, res, proxyOptions) {
        res.setHeader('Access-Control-Allow-Origin', 'https://sheetdbv9angular.herokuapp.com/');
      },
    },
  ];