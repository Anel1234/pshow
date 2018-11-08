$(document).ready(function () {
    console.log('App starting!');
    $.getJSON("pshownew.json", function(data) {
        var Quotes = [];
        $.each(data.Episodes, function(i,episode) {
            $.each(episode.Quotes, function(j, quote) {
                Quotes.push({"Episode": episode.Episode, "Quote": quote })
            })
            //totalQuotes += value.Quotes.length;
        })
        ko.applyBindings(new WordViewModel(Quotes));
    })
})

function WordViewModel(Quotes) {

    //var Quote = Quotes[Math.floor(Math.random()*Quotes.length)];
    self.episode = ko.observable();
    self.quote = ko.observable();
    
    WordClick = function() {
        self.quote(Quotes[Math.floor(Math.random()*Quotes.length)].Quote);
        self.episode(Quotes[Math.floor(Math.random()*Quotes.length)].Episode);
    }

    WordClick();
}