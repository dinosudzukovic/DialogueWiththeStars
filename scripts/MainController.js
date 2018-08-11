
app.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.timestamp = Date();
    $scope.smallnumber = 0;
    $scope.theMessage = "";

    $scope.percentageofc = 0;
    $scope.dilatedTimeMessage1 = "";
    $scope.dilatedTimeMessage2 = "";
    $scope.c = 299792458;
    $scope.dilatedtime = 0;
    $scope.velocity = 0;


    $scope.checkNumber = function() {
		if (isNaN($scope.smallnumber) || $scope.smallnumber < 1 || $scope.smallnumber > 10) {
			$scope.theMessage = "Number was expected to be between 1 and 10";
		} else {
			$scope.theMessage = "Number is Good";
		}
	}

    $scope.calculateTimeDilation = function() {
		if (isNaN($scope.percentageofc) || $scope.percentageofc < 0.000001 || $scope.percentageofc > 99.99999999999999) {
            $("#dilatedtimehtml").hide();
            $scope.dilatedTimeMessage1 = "Percentage of c was expected to be between 0.000001 and 100";
            $scope.dilatedTimeMessage2 = "";
		} else {

            $("#dilatedtimehtml").show();
            $scope.velocity = ($scope.percentageofc/100)*$scope.c;

            $scope.dilatedtime = 100 * (Math.sqrt(1 - Math.pow(($scope.velocity/$scope.c), 2)))

            $scope.dilatedTimeMessage1 = "At the entered percentage of c, time is slowed down to ";
            document.getElementById("dilatedtimehtml").value = $scope.dilatedtime;    
            $scope.dilatedTimeMessage2 = "% of its usual value";
            
		}
	}


    
    $scope.Articles = [
        {"Title":"Plot","Body":"<p>Mutant pop-star Lila Cheney organizes a free concert in Central Park to promote diversity in society and invites Professor Charles Xavier to speak at the concert. His speech is interrupted by Stryfe who, disguised as his doppelganger and nemesis Cable, shoots Xavier with a bullet that infects the professor with a lethal strain of the Techno-organic virus.</p><p>Meanwhile, War and Famine, the Horsemen of Apocalypse, attack Iceman and Colossus, distracting them from Caliban, who kidnaps Cyclops and Jean Grey. The Horsemen are working for Mr. Sinister, who is impersonating the Horsemen's former master Apocalypse. Mr. Sinister organized the kidnapping as part of his newly formed alliance with Stryfe. Stryfe trades Mr. Sinister a canister containing the past and future Summers family DNA history, and receives Jean Grey and Cyclops in the exchange.</p> ","Image":"https://upload.wikimedia.org/wikipedia/en/7/7c/X-Cutioner%27s_Song_Cover.jpg"},
        {"Title":"Epilogue","Body":"<p>Professor X discovers that the techno-organic virus has left him temporarily capable of walking and spends his few hours without paralysis bonding with Jubilee. Rogue and Gambit hang out together as Rogue agrees to let Gambit be her 'eyes' until she regains her sight, laying the groundwork for the two finally becoming a couple.</p> <p>Archangel and Beast rebuild the bar that Cyclops and Jean Grey were kidnapped in and think back to their days as the original X-Men. </p>","Image":"https://upload.wikimedia.org/wikipedia/en/7/7c/X-Cutioner%27s_Song_Cover.jpg"},
        {"Title":"Stryfe's Strike File","Body":"<p>Stryfe's Strike File was the name of a 1993 X-Men one-shot written by Fabian Nicieza and Scott Lobdell. It included several years worth of foreshadowing of Lobdell and Nicieza's X-Men plotlines, most notably the Legacy Virus plotline. The comic framing device was that the files in the one-shot were on a CD-ROM found at Stryfe's base by Bishop and handed over to Xavier without telling anyone else about it. After nearly two dozen pages of text and picture files, most of which were taken from the trading card inserts included in the individual issues of the crossover, the book ended with a closing sequence where Xavier destroys the disk rather than showing it to Cyclops and Jean Grey.</p><p>The book contained entries for Graydon Creed, Threnody, and Holocaust prior to their first appearances elsewhere. Graydon Creed would appear as a villain two months later, Threnody would appear eleven months late, yet Holocaust would not appear in the X-Men comics until the alternate reality Age of Apocalypse storyline. The version found in that storyline differs from the one found in Stryfe's Strike File in that the Age of Apocalypse Holocaust requires a containment suit and is very talkative while the Holocaust in the files does not need a containment suit and is a silent killer.</p>","Image":"https://upload.wikimedia.org/wikipedia/en/7/7c/X-Cutioner%27s_Song_Cover.jpg"}
    ];
    
    //the following is a way to retrieve the data from another place and display it
    /*
    $scope.Articles = [];
    $http({method: 'POST', url:'http://ChooseToCodeAPI.azurewebsites.net/api/articles/', data: {
        //this is the name of the SchoolName in app.js
        ClassName: 'Choose to Code School Example', 
        Count:3
    }}).then(function(result){
        $scope.Articles = result.data;
    })
    */


    //The underscores in the variable names indicate that they are private to the function
    //Can't access these variables by themselves, need to use the scope.User object to manipulate them
    var _first = "Your";
    var _last = "Name";
    $scope.User = {
        firstName: function (first) { return arguments.length ? (_first = first) : _first },
        lastName: function (last) { return arguments.length ? (_last = last) : _last },
        fullName: function() { return _first + ' '+ _last; }
    }



}]);