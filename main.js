function promptCharacter() {
    var txt;
    var person = prompt("Select your Character Type:", "Choose wisely");
    if (person == null || person == "Choose wisely") {
      txt = "Not a valid input try again.";
    } else {
      txt = "Hello " + person + "! Sadly, ultimately your skills don't mean shit.";
    }
    document.getElementById("demo").innerHTML = txt;   // sourced from w3 school of course haha
  }
  
   // Assign Stats
   function promptStats(){
    let stats = [];
    for(var i = 0; i < 5; i++) {
    stats.push(prompt('Assign Strength (1-10):'));
    stats.push(prompt('Assign Intellect (1-10):'));
    stats.push(prompt('Assign Craftiness (1-10):'));
    stats.push(prompt('Assign Endurance (1-10):'));
    stats.push(prompt('Assign Luck (1-10):'));
    break;
    }
}
  
  //Assign General Info
  function promptGeneral(){
      let general = [];
      for(var i = 0; i < 3; i++) {
      general.push(prompt('Assign Gender:'));
      general.push(prompt('Assign Height'));
      general.push(prompt('Assign Race'));
      break;
      }
  }
  
  //What is your name?
  function promptFunction() {
      let myName = prompt("What is your name?")
    //   let player = !isNaN(Number(myName));
      if (myName === "") {
          alert('You did not enter a name!');
      } else if (myName != null) {
          alert('Welcome to the beginning of the End ' + myName + '! Click start to begin.');
      } else {
          (myName === null)
          let bye = confirm('Are you sure?');
          if (bye === true){
              alert('I knew you were too scared!');
          } else {
              alert('You seem uncertain.');
          }
      }
  };
  
  
  function promptPassword( )
  {
  
  var name = prompt ("Enter your Username: ");
  var pwd = prompt ("Enter your Password: ");
  
  while (pwd != 'free'){
  alert("Login is incorrect");
  pwd = prompt ("Enter your Password: ");
  }
  
  alert("Password is correct, you are allowed to enter the site");
  
  }


  
  
                              // Select weapon and story begins here
  function promptWeapon() {
      let weapon = prompt("You're watching TV and then all of a sudden there is a Special News interuption.  Live video feed shows people going chaotic on the streets.  Audio comes in and the news anchor says barricade yourself inside of your house and protect yourselves, there is a Zombie Apocalypse!!!  Just then you hear your neighbors across the street screaming.  You look and see a small group of zombies ravaging her home and eating her guts.  One zombie is alone just scanning... looks like for which house to target next.  Then suddenly you notice it's fixated on your house.  Your immediate thought is to grab a weapon and hide...", "(Choose a weapon)")
      if (weapon === "" || weapon === "Choose a weapon") {
          alert('You need to choose a weapon.');
      } else if (weapon != null) {
                              //---- 2nd prompts of story: Select Room A or B to move on----
          let room = prompt("OH NO! There seems to be sound of footsteps shuffling outside your front door.  You have your weapon in hand and you're ready to defend yourself, but you understand avoiding a fight and not alerting the other zombies is better option.  Where will you hide?..... \nA: Upstairs \nB: The Basement \nC: The Imediate Closet \nD: Say fuck it, its just one zombie I can take'em", "(Choose a Letter)")
          room = room.toLowerCase();
  
          switch (room) {
              case 'a':
                  let upstars = prompt("You ran Upstairs! Shortly after you hear the window shattered where you had been gazing from.  You don't think the Zombie heard nor saw you.  You move quietly and decided to..... \nA: Go to your bedroom and hide under your bed. \nB: Lock yourself in the upstair's Bathroom \nC: Continue further up into the Attic. \nD: Wait for it to come upstairs and use the " + weapon + '.',"(Choose a letter)")
  
                  switch (upstars) {
                      case 'a':
                          alert('You quietly hid under your bed, stayed slient and listened as more and more zombies seem to enter your home.  You eventually fell asleep and then the alarm clock goes off...');
                          break;
                      case 'b':
                          alert('Upon entering the Bathroom, you shut the door a little too hard.  This alerted the Zombie... YOU DIE!!!');
                          break;
                      case 'c':
                          alert('You some how made it up to the attic without alerting the Zombie.  You laid low in the crawl space, and listened to all the Zombies below thrashing your home.  BUT, you were then suddently attacked by mutated rats... YOU DIE!!!.');
                          break;
                      case 'd':
                          alert('You somehow alerted the Zombie going up the stairs.  You Decided to take a stand and use the higher ground and narrow passage of the stairway as an advantage, you clutched the ' + weapon + ' in hand and picked off the Zombies one by one. The small group of Zombies eventually all were slain by your hands and you became ledgendary... YOU WIN!!!.')
                          break;
                  }
                  break;
              case 'b':
                  let basement = prompt("You've always been afraid of the basement but so you thought Zombies might be afraid too and that surely it would be a great spot to hide until they pass through..... \nA: You hurried down the flight of stairs \nB: You hid inside the Wahser Machine \nC: You hid in the darkest place you could find \nD: You decided to hide in the freezer, hoping to be Cryogenically Frozen", "(Choose a letter)")
  
                  switch (basement){
                      case 'a':
                          alert('You tripped and tumbled down the stairs.  You sprained your ankle, fractured your ribs, broke your right pinky finger, lost an eyeball and cracked your skull... YOU DIE!!!')
                          break;
                      case 'b':
                          alert("You recently purchased an extra large Smart Appliance Washer and Dryer to do large loads of luandry, the washer machine fits your perfectly!  After 5 minutes the Washer machine's robotic voice comes on and says you don't not have authorization to live inside it.  It locks its door and floods the inside with water.  You drowned to death... you are extra clean but, YOU DIE!!!")
                          break;
                      case 'c':
                          alert("You located the darkest place in the basement you could find.  After about 5 minutes, you were jumped by ghosts... YOU DIE!!!")
                          break;
                      case 'd':
                          alert("Yes, your plan for Cryogenics worked!  However, when you exit your freezer and up the stairs out of your basement you noticed you had no roof over your head.  You were outside, and there seem to be mutated roaches and a few lonely scavengers, some appearing to have the features of zombies, yet they didn't seem hostile.  You don't know what to expect but luckily you've played FallOut... YOU WIN!!!")
                  }
                  break;
              case 'c':
                  alert('You hid inside the front entry way closet thinking you can escape on foot as soon as the zombie breaks in and advance foward.  \n"HAHA Clever!", you thought. \nBut when the zombie broke in and staggered where you were, you got nervous and farted. \nThis loud noise alerted all the Zombies, YOU DIE!!!')
                  break;
              case 'd':
                  alert('You put up a valiant fight, but this alerted the near by Zombies and you got jumped, YOU DIE!!!.');
                  break;
              default:
                  alert('Please choose one.')
                  break;
          }
      } else {
          (weapon === null)
          let abort = confirm('Are you quitting?');
          if (abort === true) {
              alert('The world needs a Hero!');
          } else {
              alert("It's never too late to start again.");
          }
      };
  }