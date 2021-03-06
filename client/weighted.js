Meteor.call("getWeighted", function(error, result) {
  if (error)
      console.log(error)
  return Session.set("weightedPrices", result);
});

Template.weighted.helpers({
  weightedPrices: function () {
    var quotes = Session.get("weightedPrices"),
      data = [];

    _.each(quotes, function (quote, ticker) {
  
      data.push({
        curr : ticker,
        seven:  quote["7d"] , 
        thirty: quote["30d"] , 
        sixty:  quote["24h"], 
      });

    })
    return data;
  }
});