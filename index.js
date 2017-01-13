$(document).ready(function() {


  var fullQuote = randomQuote();

  $('.quote').html('"' + fullQuote.quote + '" - ');
  $('.quoter').html(fullQuote.quoter);

  var sign1 = getParameterByName("sign1")
  var sign2 = getParameterByName("sign2")


  // get the selected signs

  if(sign1 !== "" && sign2 !== "") {

    console.log('you have signs');

    $('h2').html("HERE'S THE DEAL");

    $('select#sign1').val(sign1);
    $('select#sign2').val(sign2);
    
    $('#defaultMessage').addClass("hidden")

    // make the match and display the results

    $('#' + sign1 + '_' + sign2).removeClass("hidden")
    $('#' + sign2 + '_' + sign1).removeClass("hidden")
    }

  // match button event handler

  $('#matchMe').click(match);

  function match(event) {
      event.preventDefault();

      var sign1selected = $('select#sign1').val();
      var sign2selected = $('select#sign2').val();

      // do the page redirect to the results

      document.location.href = 'index.html?sign1=' + sign1selected + '&sign2=' + sign2selected;

  }

  // this function changes the URL

  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
          results = regex.exec(url);
      if (!results) return '';
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }



  // logo hover

  $('logo').mouseover(function() {
    $('.h1hover').removeClass('hidden');
    $('.h1original').addClass('hidden');
  });

    $('logo').mouseout(function() {
    $('.h1hover').addClass('hidden');
    $('.h1original').removeClass('hidden');
  });



  // random quote generator

  function randomQuote() {
    var randomNumber = Math.floor((Math.random() * 17));
    console.log("random!", randomNumber);
    var quotes = [
                    {
                      "quote" : "Love isn't something you find. Love is something that finds you.",
                      "quoter": "Loretta Young"
                    },
                    {
                      "quote" : "You can't blame gravity for falling in love.",
                      "quoter": "Albert Einstein"
                    },
                    {
                      "quote" : "Love is composed of a single soul inhabiting two bodies.",
                      "quoter": "Aristotle"
                    },
                    {
                      "quote" : "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
                      "quoter": "Lao Tzu"
                    },
                    {
                      "quote" : "To love and be loved is to feel the sun from both sides.",
                      "quoter": "David Viscott"
                    },
                    {
                      "quote" : "Where there is love there is life.",
                      "quoter": "Mahatma Gandhi"
                    },
                    {
                      "quote" : "The course of true love never did run smooth.",
                      "quoter": "William Shakespeare"
                    },
                    {
                      "quote" : "Love is the flower you've got to let grow.",
                      "quoter": "John Lennon"
                    },
                    {
                      "quote" : "I was born with an enormous need for affection, and a terrible need to give it.",
                      "quoter": "Audrey Hepburn"
                    },
                    {
                      "quote" : "Love is an irresistible desire to be irresistibly desired.",
                      "quoter": "Robert Frost"
                    },
                    {
                      "quote" : "I feel that there is nothing more truly artistic than to love people.",
                      "quoter": "Vincent Van Gogh"
                    },
                    {
                      "quote" : "Don't forget to love yourself.",
                      "quoter": "Soren Kierkegaard"
                    },
                    {
                      "quote" : "For small creatures such as we the vastness is bearable only through love.",
                      "quoter": "Carl Sagan"
                    },
                    {
                      "quote" : "We are born of love; Love is our mother.",
                      "quoter": "Rumi"
                    },
                    {
                      "quote" : "Do all things with love.",
                      "quoter": "Og Mandino"
                    },
                    {
                      "quote" : "The art of love is largely the art of persistence.",
                      "quoter": "Albert Ellis"
                    },
                    {
                      "quote" : "Love is when you meet someone who tells you something new about yourself.",
                      "quoter": "Andre Breton"
                    },
                  ];
    return quotes[randomNumber];
  }

});