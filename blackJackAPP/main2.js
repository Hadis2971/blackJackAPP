var player_first_card = document.getElementById("player_first_card_img"),
    player_second_card = document.getElementById("player_second_card_img"),
    
    comp_first_card = document.getElementById("comp_first_card_img"),
    comp_second_card = document.getElementById("comp_second_card_img");

var player_first_card_div = document.getElementById("player_first_card"),
    player_second_card_div = document.getElementById("player_second_card"),
    
    comp_first_card_div = document.getElementById("comp_first_card"),
    comp_second_card_div = document.getElementById("comp_second_card");

var additional_player_cards = document.getElementById("additional_player_cards"),
additional_comp_cards = document.getElementById("additional_comp_cards");

var start_game_btn = document.getElementById("start_game"),
    add_card_btn = document.getElementById("add_card"),
    end_turn_btn = document.getElementById("end_turn"),
    end_game_btn = document.getElementById("end_game"),
    split_cards_btn = document.getElementById("split_cards"),
    place_bet = document.getElementById("place_bet"),
    
    place_bet2 = document.getElementById("place_bet2"),
    place_bet3 = document.getElementById("place_bet3"),
    
    new_card_1 = document.getElementById("new_card_1"),
    new_card_2 = document.getElementById("new_card_2"),
    end_turn_1 = document.getElementById("end_turn_1"),
    end_turn_2 = document.getElementById("end_turn_2");

var bet = document.getElementById("bet"),
    money = document.getElementById("money");

var input_bet = document.getElementById("input_bet");


var bet2 = document.getElementById("bet2"),
    bet3 = document.getElementById("bet3");

var input_bet1 = document.getElementById("input_bet2"),
    input_bet2 = document.getElementById("input_bet3");

end_turn_btn.disabled = true;

new_card_1.disabled = true;
input_bet1.disabled = false;

end_turn_1.disabled = true;
end_turn_2.disabled = true;

new_card_2.disabled = true;
input_bet2.disabled = false;

input_bet2.disabled = true;
add_card_btn.disabled = true;
end_turn_btn.disabled = true;
input_bet.disabled = true;
split_cards_btn.disabled = true;

var app_data = {
    all_cards_arr : [
        "2_of_clubs","2_of_diamonds","2_of_hearts","2_of_spades",
        "3_of_clubs","3_of_diamonds","3_of_hearts","3_of_spades",
        "4_of_clubs","4_of_diamonds","4_of_hearts","4_of_spades",
        "5_of_clubs","5_of_diamonds","5_of_hearts","5_of_spades",
        "6_of_clubs","6_of_diamonds","6_of_hearts","6_of_spades",
        "7_of_clubs","7_of_diamonds","7_of_hearts","7_of_spades",
        "8_of_clubs","8_of_diamonds","8_of_hearts","8_of_spades",
        "9_of_clubs","9_of_diamonds","9_of_hearts","9_of_spades",
        "10_of_clubs","10_of_diamonds","10_of_hearts","10_of_spades",
        "ace_of_clubs","ace_of_diamonds","ace_of_hearts","ace_of_spades",
        "jack_of_clubs","jack_of_diamonds","jack_of_hearts","jack_of_spades",
       "queen_of_clubs","queen_of_diamonds","queen_of_hearts","queen_of_spades",
        "king_of_clubs","king_of_diamonds","king_of_hearts","king_of_spades",
    ],
    
    initi : undefined
};


var game = {
    
    continue_game: true,
    
    cards_splited: false,
    
    player_wallet: 100,
    
    player_cards_value : [],
    comp_cards_value : [],
    
    player_new_cards_value: [],
    comp_new_cards_value: [],
    
    comp_sum_of_cards: 0,
    player_sum_of_cards: 0,
    
    which_comp_card : [],
    
    sum_of_first_card: 0,
    sum_of_second_card: 0,
    
    player_new_cards_first_card: [],
    player_new_cards_second_card: [],
    
    change_continue: function(){
        game.continue_game = false;
        add_card_btn.disabled = true;
        end_turn_btn.disabled = true;
        split_cards_btn.disabled = true;
        
        if(game.cards_splited){
            player_first_card_div.style.transform = "translateX(0.01em)";
        }
        
        game.cards_splited = false;
        input_bet.disabled = true;
        money.innerHTML = "Wallet: 100$";
        game.player_wallet = 100;
        game.back_to_zero();
    },
    
    get_the_cards : function(arr){
        var which_cards = [];
        var i, idx = 0;
        
        for(i = 0; i < arr.length; i++){
            idx = 0;
            switch(arr[i]){
                    case(1): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 36);break;
                    case(2): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 0);break;
                    case(3): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 4);break;
                    case(4): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 8);break;
                    case(5): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 12);break;
                    case(6): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 16);break;
                    case(7): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 20);break;
                    case(8): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 24);break;
                    case(9): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 28);break;
                    case(10): idx = Math.floor(Math.random() * 4); which_cards.push(idx + 48);break;
            }
        }
        if(which_cards.length === 1){
            return which_cards[0];
        }
        return which_cards;
    },
    
    
    
    back_to_zero: function(){
        game.player_cards_value = [];
        game.comp_cards_value = [];

        game.player_new_cards_value = [];
        game.comp_new_cards_value = [];

        game.comp_sum_of_cards =  0;
        game.player_sum_of_cards =  0;
        
        game.comp_new_cards_value = [];
        game.player_new_cards_value = [];
        
        game.which_comp_card = [];
        
        
        
        player_first_card.src = "cards/black.png";
        player_first_card.style.backgroundColor = "transparent";
        player_second_card.src = "cards/black.png";
        player_second_card.style.backgroundColor = "transparent";
        
        comp_first_card.src = "cards/black.png";
        comp_first_card.style.backgroundColor = "transparent";
        comp_second_card.src = "cards/black.png";
        comp_second_card.style.backgroundColor = "transparent";
        
        input_bet.value = "";
        
        additional_player_cards.innerHTML = "";
        additional_comp_cards.innerHTML = "";
    },
    
    back_to_zero_splited: function(){
      
      game.sum_of_first_card = 0;
      game.sum_of_second_card =  0;
      
      game.player_new_cards_first_card = [];
      game.player_new_cards_second_card =  [];    
      
         
        
      player_first_card_div.style.opacity = "1";
      player_second_card_div.style.opacity = "1";
        
      player_first_card_div.style.transform = "translateX(0.01em)";    
      
      game.comp_sum_of_cards = 0;
      game.player_sum_of_cards = 0;
        
      end_turn_btn.disabled = true;
      input_bet.disabled = true;
      split_cards_btn.disabled = true;
      new_card_2.disabled = true;    
      game.cards_splited = false;
      end_turn_1.disabled = true;
      end_turn_2.disabled = true;
      input_bet1.value = "";  
      input_bet1.disabled = false;
      input_bet2.value = "";
      place_bet2.disabled = false;
        
      start_game_btn.style.display = "block"; 
      add_card_btn.style.display = "block"; 
      end_turn_btn.style.display = "block"; 
      end_game_btn.style.display = "block"; 
      split_cards_btn.style.display = "block";
      bet.style.display = "block";
      place_bet.style.display = "block";    
        
      new_card_1.style.display = "none"; 
      new_card_2.style.display = "none"; 
      end_turn_1.style.display = "none"; 
      end_turn_2.style.display = "none";
      bet2.style.display = "none";
      bet3.style.display = "none";    
      place_bet2.style.display = "none";
      place_bet3.style.display = "none";    
      
      additional_player_cards.style.marginRight = "0em";  
      additional_player_cards.innerHTML = "";    
      document.getElementById("player_options").style.bottom = "0%";
      setTimeout(game.back_to_zero,2000); 
      setTimeout(game.start_game,2100);
    },
    
    start_game: function(){
        input_bet.disabled = false;
        end_turn_btn.disabled = true;
        input_bet.disabled = false;
        split_cards_btn.disabled = false;
        game.continue_game = true;
        
        var i;
        var which_player_card = [];
        game.back_to_zero();
        
        var random_sign = 0;
        for(i = 0; i < 2; i++){
            
            idx = Math.floor(Math.random() * 10 + 1);
            if(idx === 11){idx -= 1;}
            game.player_sum_of_cards += idx;
            game.player_cards_value.push(idx);
            
            idx = Math.floor(Math.random() * 10 + 1);
            if(idx === 11){idx -= 1;}
            game.comp_cards_value.push(idx);
            game.comp_sum_of_cards += game.comp_cards_value[i];
        }
        
        which_player_card = game.get_the_cards(game.player_cards_value);
        game.which_comp_card = game.get_the_cards(game.comp_cards_value);
        
        player_first_card.setAttribute("src","cards/" + app_data.all_cards_arr[which_player_card[0]] + ".png");
        player_first_card.style.backgroundColor = "#f2f2f2";
        
        player_second_card.setAttribute("src","cards/" + app_data.all_cards_arr[which_player_card[1]] + ".png");
        player_second_card.style.backgroundColor = "#f2f2f2";
        
        comp_first_card.setAttribute("src","cards/black.png");
        comp_second_card.setAttribute("src","cards/black.png");
        
        /*
        console.log(which_comp_card);
        console.log(which_player_card);
        console.log(game.player_sum_of_cards);
        console.log(game.comp_sum_of_cards);*/
    },
    
    
    who_wins: function(){
        add_card_btn.disabled = true;
        end_turn_btn.disabled = true;
        
        var frst_img = "cards/" + app_data.all_cards_arr[game.which_comp_card[0]]
                               + ".png";
        
        var scnd_img = "cards/" + app_data.all_cards_arr[game.which_comp_card[1]]
                               + ".png";
        
        comp_first_card.src = frst_img;
        comp_first_card.style.backgroundColor = "#f2f2f2";
        comp_second_card.src = scnd_img;
        comp_second_card.style.backgroundColor = "#f2f2f2";
        
        if((game.player_sum_of_cards > game.comp_sum_of_cards) && game.player_sum_of_cards <= 21 && game.comp_sum_of_cards < 21){alert("Player Won"); game.player_wallet += (input_bet.value * 2); money.textContent = game.player_wallet + "$";}
        
        else if((game.comp_sum_of_cards > game.player_sum_of_cards) && game.comp_sum_of_cards <= 21 && game.player_sum_of_cards < 21){alert("The House Won"); game.player_wallet -= (input_bet.value - 0); money.textContent = game.player_wallet + "$";}
        
        else if((game.comp_sum_of_cards > 21) && game.player_sum_of_cards <= 21){alert("Player Won"); game.player_wallet += (input_bet.value * 2); money.textContent = game.player_wallet + "$";}
        
        else if((game.player_sum_of_cards > 21) && game.comp_sum_of_cards <= 21){alert("The House Won"); game.player_wallet -= (input_bet.value - 0); money.textContent = game.player_wallet + "$";}
        
        else if(game.player_sum_of_cards === 21 && game.comp_sum_of_cards === 21){alert("Deuce");}
        
        if(game.player_wallet <= 0){
            setTimeout(function(){
                alert("You Have No Money More Luck Next Time");
                game.change_continue();
                return;
            },2000);
            
        }
        
        setTimeout(game.back_to_zero,2500);
        if(game.continue_game){
            setTimeout(game.start_game,3300);
        }else{
            return;
        }
        
    },
    
    
    additional_player_cards: function(){
                
        var img = document.createElement("img");
        var idx = [];
        idx.push(Math.floor(Math.random() * 10 + 1));
        game.player_sum_of_cards += idx[0];    
        
        var card = game.get_the_cards(idx);
        game.player_new_cards_value.push(card);
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[card] + ".png");
        
        additional_player_cards.appendChild(img);
        
        if(game.player_sum_of_cards > 21){
            alert("You are over 21!!!");
            game.who_wins();
            return;
        }
        
        if(game.player_new_cards_value.length >= 8 && 
           game.player_new_cards_value.length <= 12){
            var i;
            for(i = 1; i < game.player_new_cards_value.length; i++){
                additional_player_cards.childNodes[i].style.width = "70px"
                additional_player_cards.childNodes[i].style.height = "100px"
            }
        }else if(game.player_new_cards_value.length > 12 &&
                 game.player_new_cards_value.length <= 16){
            var i;
            for(i = 1; i < game.player_new_cards_value.length; i++){
                additional_player_cards.childNodes[i].style.width = "50px"
                additional_player_cards.childNodes[i].style.height = "70px"
            }
        }else if(game.player_new_cards_value.length > 16){
            var i;
            for(i = 1; i < game.player_new_cards_value.length; i++){
                additional_player_cards.childNodes[i].style.width = "30px"
                additional_player_cards.childNodes[i].style.height = "50px"
            }
        }
        
        
        idx = [];
        console.log(game.player_sum_of_cards);
    },
    
    additonal_comp_cards: function(){
        console.log(game.comp_sum_of_cards);
        if(game.player_sum_of_cards > 21){game.who_wins(); return;}
                
        if(game.comp_sum_of_cards >= 21){
            game.who_wins();
            return;
        }else if(game.comp_sum_of_cards > game.player_sum_of_cards){
            game.who_wins();
            return;
        }
        
        var img = document.createElement("img");
        var idx = [];
        idx.push(Math.floor(Math.random() * 10 + 1));
        game.comp_sum_of_cards += idx[0];
        
        var card = game.get_the_cards(idx);
        game.comp_new_cards_value.push(card);
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[card] + ".png");
        
        additional_comp_cards.append(img);
        
        if(game.comp_new_cards_value.length >= 8 && 
           game.comp_new_cards_value.length <= 12){
            var i;
            for(i = 1; i < game.comp_new_cards_value.length; i++){
                additional_comp_cards.childNodes[i].style.width = "70px"
                additional_comp_cards.childNodes[i].style.height = "100px"
            }
        }else if(game.comp_new_cards_value.length > 12 &&
                 game.comp_new_cards_value.length <= 16){
            var i;
            for(i = 1; i < game.comp_new_cards_value.length; i++){
                additional_comp_cards.childNodes[i].style.width = "50px"
                additional_comp_cards.childNodes[i].style.height = "70px"
            }
        }else if(game.comp_new_cards_value.length > 16){
            var i;
            for(i = 1; i < game.player_new_cards_value.length; i++){
                additional_comp_cards.childNodes[i].style.width = "30px"
                additional_comp_cards.childNodes[i].style.height = "50px"
            }
        }
        
        idx = [];
        
        
        game.additonal_comp_cards();
    },
    
    additional_comp_cards_splited: function(){
        if(game.sum_of_first_card > 21 && game.sum_of_second_card > 21){game.who_wins_splited(); return;}
                
        if(game.comp_sum_of_cards >= 21){
            game.who_wins_splited();
            return;
        }else if(game.comp_sum_of_cards > game.sum_of_first_card || 
                 game.comp_sum_of_cards > game.sum_of_second_card){
            game.who_wins_splited();
            return;
        }
        
        var img = document.createElement("img");
        var idx = [];
        idx.push(Math.floor(Math.random() * 10 + 1));
        game.comp_sum_of_cards += idx[0];
        
        var card = game.get_the_cards(idx);
        game.comp_new_cards_value.push(card);
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[card] + ".png");
        
        additional_comp_cards.append(img);
        
        if(game.comp_new_cards_value.length >= 8 && 
           game.comp_new_cards_value.length <= 12){
            var i;
            for(i = 1; i < game.comp_new_cards_value.length; i++){
                additional_comp_cards.childNodes[i].style.width = "70px"
                additional_comp_cards.childNodes[i].style.height = "100px"
            }
        }else if(game.comp_new_cards_value.length > 12 &&
                 game.comp_new_cards_value.length <= 16){
            var i;
            for(i = 1; i < game.comp_new_cards_value.length; i++){
                additional_comp_cards.childNodes[i].style.width = "50px"
                additional_comp_cards.childNodes[i].style.height = "70px"
            }
        }else if(game.comp_new_cards_value.length > 16){
            var i;
            for(i = 1; i < game.player_new_cards_value.length; i++){
                additional_comp_cards.childNodes[i].style.width = "30px"
                additional_comp_cards.childNodes[i].style.height = "50px"
            }
        }
        
        idx = [];
        game.additional_comp_cards_splited();
    },
    
    who_wins_splited: function(){
            
          var frst_img = "cards/" + app_data.all_cards_arr[game.which_comp_card[0]]
                               + ".png";
        
          var scnd_img = "cards/" + app_data.all_cards_arr[game.which_comp_card[1]]
                       + ".png";
        
          if((game.sum_of_first_card > 21 && game.comp_sum_of_cards <= 21) &&
              (game.sum_of_second_card > 21 && game.comp_sum_of_cards <= 21)){
              
                comp_first_card.src = frst_img;
                comp_first_card.style.backgroundColor = "#f2f2f2";
                comp_second_card.src = scnd_img;
                comp_second_card.style.backgroundColor = "#f2f2f2";
              
              alert("Computer Won First Hand"); money.textContent = game.player_wallet + "$";
              alert("Computer Won Second Hand"); money.textContent = game.player_wallet + "$";
                game.back_to_zero_splited();
              
                if(game.player_wallet <= 0){
                    alert("You Have No Money More Luck Next Time");
                    game.change_continue();
                    return;
                }
              return;
          }    
          
          if(game.sum_of_first_card > 21 && game.comp_sum_of_cards <= 21){
              alert("Computer Won First Hand"); money.textContent = game.player_wallet + "$";
          }
        
          if(game.sum_of_second_card > 21 && game.comp_sum_of_cards <= 21){
              alert("Computer Won Second Hand"); money.textContent = game.player_wallet + "$";
          }
        
          if((game.sum_of_first_card > game.comp_sum_of_cards) && game.sum_of_first_card <= 21 && game.comp_sum_of_cards < 21){
              alert("Player Won First Hand"); game.player_wallet += (input_bet1.value * 2); money.textContent = game.player_wallet + "$";
          }
        
          if(game.sum_of_first_card <= 21 && game.comp_sum_of_cards > 21){
              alert("Player Won First Hand"); game.player_wallet += (input_bet1.value * 2); money.textContent = game.player_wallet + "$";
          }
        
         if((game.sum_of_second_card > game.comp_sum_of_cards) && game.sum_of_second_card <= 21 && game.comp_sum_of_cards < 21){
             alert("Player Won Second Hand"); game.player_wallet += (input_bet2.value * 2); money.textContent = game.player_wallet + "$";
         }
        
         if(game.sum_of_second_card <= 21 && game.comp_sum_of_cards > 21){
             alert("Player Won Second Hand"); game.player_wallet += (input_bet2.value * 2); money.textContent = game.player_wallet + "$";
         }
        
         if(game.sum_of_first_card < game.comp_sum_of_cards && game.comp_sum_of_cards <= 21 && game.sum_of_first_card < 21){
              alert("Computer Won First Hand"); money.textContent = game.player_wallet + "$";
          }
        
         if(game.sum_of_second_card < game.comp_sum_of_cards && game.comp_sum_of_cards <= 21 && game.sum_of_first_card < 21){
             alert("Computer Won Second Hand"); money.textContent = game.player_wallet + "$";
         }
         
         comp_first_card.src = frst_img;
         comp_first_card.style.backgroundColor = "#f2f2f2";
         comp_second_card.src = scnd_img;
         comp_second_card.style.backgroundColor = "#f2f2f2";
         game.back_to_zero_splited();
         if(game.player_wallet <= 0){
            setTimeout(function(){
                alert("You Have No Money More Luck Next Time");
                game.change_continue();
                return;
            },2000);  
            
        } 
    },
    
    add_to_first_card: function(){
                
        var img = document.createElement("img");
        var idx = [];
        idx.push(Math.floor(Math.random() * 10 + 1));
        game.sum_of_first_card += idx[0];
        
        var card = game.get_the_cards(idx);
        game.player_new_cards_first_card.push(card);
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[card] + ".png");
        
        additional_player_cards.appendChild(img);
        
        if(game.sum_of_first_card > 21){
            alert("You are over 21!!!");
            player_first_card_div.style.opacity = "0.5";
            //additional_player_cards.innerHTML = "";
            new_card_1.disabled = true;
            input_bet2.disabled = false;
            input_bet1.disabled = true;
            additional_player_cards.childNodes[additional_player_cards.childNodes.length-1].style.marginRight = "3em";
            game.end_turn_1_fja();
            return;
        }
        
        if(additional_player_cards.childNodes.length >= 8 && 
           additional_player_cards.childNodes.length <= 12){
            var i;
            for(i = 1; i < additional_player_cards.childNodes.length; i++){
                additional_player_cards.childNodes[i].style.width = "70px"
                additional_player_cards.childNodes[i].style.height = "100px"
            }
        }else if(additional_player_cards.childNodes.length > 12 &&
                 additional_player_cards.childNodes.length <= 16){
            var i;
            for(i = 1; i < additional_player_cards.childNodes.length; i++){
                additional_player_cards.childNodes[i].style.width = "50px"
                additional_player_cards.childNodes[i].style.height = "70px"
            }
        }else if(additional_player_cards.childNodes.length > 16){
            var i;
            for(i = 1; i < additional_player_cards.childNodes.length; i++){
                additional_player_cards.childNodes[i].style.width = "30px"
                additional_player_cards.childNodes[i].style.height = "50px"
            }
        }
        
        
        idx = [];
        
    },
    
    
    add_to_second_card: function(){
        
        var img = document.createElement("img");
        var idx = [];
        idx.push(Math.floor(Math.random() * 10 + 1));
        game.sum_of_second_card += idx[0];
        
        var card = game.get_the_cards(idx);
        game.player_new_cards_second_card.push(card);
        
        
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[card] + ".png");
        additional_player_cards.appendChild(img);
        
        
        if(game.sum_of_second_card > 21){
            additional_player_cards.appendChild(img);
            alert("You are over 21!!!");
            //additional_player_cards.innerHTML = "";
            player_second_card_div.opacity = "0.5";
            game.who_wins_splited();
            return;
        }
        
        if(additional_player_cards.childNodes.length >= 8 && 
           additional_player_cards.childNodes.length <= 12){
            var i;
            for(i = 1; i < additional_player_cards.childNodes.length; i++){
                additional_player_cards.childNodes[i].style.width = "70px"
                additional_player_cards.childNodes[i].style.height = "100px"
            }
        }else if(additional_player_cards.childNodes.length > 12 &&
                 additional_player_cards.childNodes.length <= 16){
            var i;
            for(i = 1; i < additional_player_cards.childNodes.length; i++){
                additional_player_cards.childNodes[i].style.width = "50px"
                additional_player_cards.childNodes[i].style.height = "70px"
            }
        }else if(additional_player_cards.childNodes.length > 16){
            var i;
            for(i = 1; i < additional_player_cards.childNodes.length; i++){
                additional_player_cards.childNodes[i].style.width = "30px"
                additional_player_cards.childNodes[i].style.height = "50px"
            }
        }
        
        
        idx = [];
    },
    
    play_with_splited: function(){
        start_game_btn.style.display = "none"; 
        add_card_btn.style.display = "none"; 
        end_turn_btn.style.display = "none"; 
        end_game_btn.style.display = "none"; 
        split_cards_btn.style.display = "none";
        bet.style.display = "none";
        place_bet.style.display = "none";
        
        new_card_1.style.display = "block"; 
        new_card_2.style.display = "block"; 
        end_turn_1.style.display = "block"; 
        end_turn_2.style.display = "block";
        bet2.style.display = "block";
        bet3.style.display = "block";
        place_bet2.style.display = "block";
        place_bet3.style.display = "block";
        
        
        game.sum_of_first_card  += game.player_cards_value[0];
        game.sum_of_second_card += game.player_cards_value[1];
        
        document.getElementById("player_options").style.bottom = "5%";        
    },
    
    split_cards: function(){
        player_first_card_div.style.transform = "translateX(-7em)";
        game.cards_splited = true;
        game.play_with_splited();
    },
    
    end_turn_1_fja: function(){
        if(input_bet1.value === ""){return;}
        input_bet2.disabled = false;
        new_card_1.disabled = true;
        input_bet1.disabled = true;
        //additional_player_cards.innerHTML = "";
       
        if(additional_player_cards.childNodes.length){
        additional_player_cards.childNodes
        [additional_player_cards.childNodes.length-1].style.marginRight = "3em";
        player_first_card_div.style.opacity = "0.5";
        } 
        
    },
    
    end_turn_2_fja: function(){
        if(input_bet2.value === ""){return;}
        //additional_player_cards.innerHTML = "";
        player_second_card_div.style.opacity = "0.5";
        game.additional_comp_cards_splited();
        
    },
    
    place_bet_fja: function(){
        
        if(input_bet.value - 0 === 0){
            alert("You can't bet 0$");
            return;
        }
        
        if(input_bet.value === ""){return;}
        if(input_bet.value - 0 > game.player_wallet){
            alert("You don't have that much money!!!");
            return;
        }
        game.player_wallet -= (input_bet.value - 0);
        money.textContent = game.player_wallet + "$";
        add_card_btn.disabled = false;
        input_bet.disabled = true;
        end_turn_btn.disabled = false;
        split_cards_btn.disabled = true;
    },
    
    place_bet_fja2: function(){
        if(input_bet1.value === ""){return;}
        if(input_bet1.value - 0 === 0){
            alert("You can't bet 0$");
            return;
        }
        
        if(input_bet1.value - 0 === game.player_wallet){
            alert("You need to place a bet on the second card!!!");
            return;
        }
        
        if(input_bet1.value - 0 > game.player_wallet){
            alert("You don't have that much money!!!");
            return;
        }
        game.player_wallet -= (input_bet1.value - 0);
        money.textContent = game.player_wallet + "$";
        end_turn_1.disabled = false;
        new_card_1.disabled = false;
        new_card_2.disabled = true;
        input_bet1.disabled = true;
        place_bet2.disabled = true;
    },
    
    place_bet_fja3: function(){
        if(input_bet2.value === ""){return;}
        if(input_bet2.value - 0 === 0){
            alert("You can't bet 0$");
            return;
        }
        if(input_bet2.value - 0 > game.player_wallet){
            alert("You don't have that much money!!!");
            return;
        }
        game.player_wallet -= (input_bet2.value - 0);
        money.textContent = game.player_wallet + "$";
        end_turn_2.disabled = false;
        new_card_2.disabled = false;
        input_bet2.disabled = true;
        
    }
}

start_game_btn.addEventListener("click",game.start_game);
add_card_btn.addEventListener("click",game.additional_player_cards);
end_turn_btn.addEventListener("click",game.additonal_comp_cards);
end_game_btn.addEventListener("click",game.change_continue);
split_cards_btn.addEventListener("click",game.split_cards);
new_card_1.addEventListener("click",game.add_to_first_card);
new_card_2.addEventListener("click",game.add_to_second_card);
end_turn_1.addEventListener("click",game.end_turn_1_fja);
end_turn_2.addEventListener("click",game.end_turn_2_fja);
place_bet.addEventListener("click",game.place_bet_fja);
place_bet2.addEventListener("click",game.place_bet_fja2);
place_bet3.addEventListener("click",game.place_bet_fja3);















