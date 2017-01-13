$(document).ready(function() {

// Sign Calculator

   $('#submit').click(generateZodiac);

   function generateZodiac(event) {
      event.preventDefault();

      var userInputMonth = $('#month').val();
      var userInputDay = $('#day').val();

      var userInputMonthNumber = parseFloat(userInputMonth)
      var userInputDayNumber = parseFloat(userInputDay)

      var userZodiac = getZodiacSign(userInputDayNumber, userInputMonthNumber)

      $('#result').html("Hey, you're a " + userZodiac + "!")
      // $('#resultImage').html('<img src="images/'+ userZodiac + '.jpg" width="300px">')
   }

   function getZodiacSign(day, month) {

   var zodiacSigns = {
       'aries':'Aries',
       'taurus':'Taurus',
       'gemini':'Gemini',
       'cancer':'Cancer',
       'leo':'Leo',
       'virgo':'Virgo',
       'libra':'Libra',
       'scorpio':'Scorpio',
       'sagittarius':'Sagittarius',
       'capricorn':'Capricorn',
       'aquarius':'Aquarius',
       'pisces':'Pisces',
   }

    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
       return zodiacSigns.capricorn;
     } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
       return zodiacSigns.aquarius;
     } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
       return zodiacSigns.pisces;
     } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
       return zodiacSigns.aries;
     } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
       return zodiacSigns.taurus;
     } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
       return zodiacSigns.gemini;
     } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
       return zodiacSigns.cancer;
     } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
       return zodiacSigns.leo;
     } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
       return zodiacSigns.virgo;
     } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
       return zodiacSigns.libra;
     } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
       return zodiacSigns.scorpio;
     } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
       return zodiacSigns.sagittarius;
     }
   }

});