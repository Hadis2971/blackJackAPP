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
    end_game_btn = document.getElementById("end_game");

add_card_btn.disabled = true;

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
}

var game = {
    
    player_cards_value : [],
    comp_cards_value : [],
    
    player_new_cards_value: [],
    comp_new_cards_value: [],
    
    comp_sum_of_cards: 0,
    player_sum_of_cards: 0,
    
    start_game: function(){
        
        player_first_card.src = "";
        //player_first_card.style.backgroundColor = "transparent";
        
        player_second_card.src = "";
        //player_second_card.style.backgroundColor = "transparent";
        
        
        
        comp_first_card.src = "";
        //comp_first_card.style.backgroundColor = "transparent";
        
        comp_second_card.src = "";
        //comp_second_card.style.backgroundColor = "transparent";
        
        game.card_dealing();
    },
    
    
    card_dealing: function(){
        game.comp_cards_value = [];
        game.player_cards_value = [];
        add_card_btn.disabled = false;
        var idx = 0, i;
        var which_player_card = [];
        var which_comp_card = [];
        var random_sign = 0;
        for(i = 0; i < 2; i++){
            idx = Math.floor(Math.random() * 14 + 1);
            if(idx === 11){idx -= 1;}
            game.player_cards_value.push(idx);
            idx = Math.floor(Math.random() * 14 + 1);
            if(idx === 11){idx -= 1;}
            game.comp_cards_value.push(idx);
            game.comp_sum_of_cards += game.comp_cards_value[i];
        }
        
        for(i = 0; i < 2; i++){
            idx = 0;
            switch(game.player_cards_value[i]){
                    case(1): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 36);break;
                    case(2): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 0);break;
                    case(3): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 4);break;
                    case(4): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 8);break;
                    case(5): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 12);break;
                    case(6): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 16);break;
                    case(7): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 20);break;
                    case(8): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 24);break;
                    case(9): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 28);break;
                    case(10): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 32);break;
                    case(12): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 40);break;
                    case(13): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 44);break;
                    case(14): idx = Math.floor(Math.random() * 4); which_player_card.push(idx + 48);break;
            }
        }
        
        for(i = 0; i < 2; i++){
            idx = 0;
            switch(game.comp_cards_value[i]){
                    case(1): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 36);break;
                    case(2): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 0);break;
                    case(3): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 4);break;
                    case(4): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 8);break;
                    case(5): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 12);break;
                    case(6): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 16);break;
                    case(7): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 20);break;
                    case(8): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 24);break;
                    case(9): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 28);break;
                    case(10): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 32);break;
                    case(12): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 40);break;
                    case(13): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 44);break;
                    case(14): idx = Math.floor(Math.random() * 4); which_comp_card.push(idx + 48);break;
            }
        }
        
        
        player_first_card.setAttribute
        ("src","cards/" + app_data.all_cards_arr[which_player_card[0]] + ".png");
        player_first_card.style.backgroundColor = "#FFF";
        
        player_second_card.setAttribute
        ("src","cards/" + app_data.all_cards_arr[which_player_card[1]] + ".png");
        player_second_card.style.backgroundColor = "#FFF";
        
        
        
        comp_first_card.setAttribute
        ("src","cards/" + app_data.all_cards_arr[which_comp_card[0]] + ".png");
        comp_first_card.style.backgroundColor = "#FFF";
        
        comp_second_card.setAttribute
        ("src","cards/" + app_data.all_cards_arr[which_comp_card[1]] + ".png");
        comp_second_card.style.backgroundColor = "#FFF";
        
        
        console.log(which_player_card);
        console.log(which_comp_card);
    },
    
    player_get_new_card: function(){
        var new_card = 0;
        var img = document.createElement("img");
        var idx2 = Math.floor(Math.random() * 14 + 1);
            if(idx2 === 11){idx2 -= 1;}
            game.player_new_cards_value.push(idx2);
            var idx = 0;
            switch(idx2){
                    case(1): idx = Math.floor(Math.random() * 4); new_card = (idx + 36);break;
                    case(2): idx = Math.floor(Math.random() * 4); new_card = (idx + 0);break;
                    case(3): idx = Math.floor(Math.random() * 4); new_card = (idx + 4);break;
                    case(4): idx = Math.floor(Math.random() * 4); new_card = (idx + 8);break;
                    case(5): idx = Math.floor(Math.random() * 4); new_card = (idx + 12);break;
                    case(6): idx = Math.floor(Math.random() * 4); new_card = (idx + 16);break;
                    case(7): idx = Math.floor(Math.random() * 4); new_card = (idx + 20);break;
                    case(8): idx = Math.floor(Math.random() * 4); new_card = (idx + 24);break;
                    case(9): idx = Math.floor(Math.random() * 4); new_card = (idx + 28);break;
                    case(10): idx = Math.floor(Math.random() * 4); new_card = (idx + 32);break;
                    case(12): idx = Math.floor(Math.random() * 4); new_card = (idx + 40);break;
                    case(13): idx = Math.floor(Math.random() * 4); new_card = (idx + 44);break;
                    case(14): idx = Math.floor(Math.random() * 4); new_card = (idx + 48);break;
            }
        
        
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[new_card] + ".png");
        additional_player_cards.appendChild(img);
    },        
    
    
    
    computer_new_cards: function(){
        var new_card = 0;
        
        var img = document.createElement("img");
        var idx2 = Math.floor(Math.random() * 14 + 1);
            if(idx2 === 11){idx2 -= 1;}
            game.comp_sum_of_cards += idx2;
            game.comp_new_cards_value.push(idx2);
            var idx = 0;
            switch(idx2){
                    case(1): idx = Math.floor(Math.random() * 4); new_card = (idx + 36);break;
                    case(2): idx = Math.floor(Math.random() * 4); new_card = (idx + 0);break;
                    case(3): idx = Math.floor(Math.random() * 4); new_card = (idx + 4);break;
                    case(4): idx = Math.floor(Math.random() * 4); new_card = (idx + 8);break;
                    case(5): idx = Math.floor(Math.random() * 4); new_card = (idx + 12);break;
                    case(6): idx = Math.floor(Math.random() * 4); new_card = (idx + 16);break;
                    case(7): idx = Math.floor(Math.random() * 4); new_card = (idx + 20);break;
                    case(8): idx = Math.floor(Math.random() * 4); new_card = (idx + 24);break;
                    case(9): idx = Math.floor(Math.random() * 4); new_card = (idx + 28);break;
                    case(10): idx = Math.floor(Math.random() * 4); new_card = (idx + 32);break;
                    case(12): idx = Math.floor(Math.random() * 4); new_card = (idx + 40);break;
                    case(13): idx = Math.floor(Math.random() * 4); new_card = (idx + 44);break;
                    case(14): idx = Math.floor(Math.random() * 4); new_card = (idx + 48);break;
            }
        
        
        
        img.setAttribute("src","cards/" + app_data.all_cards_arr[new_card] + ".png");
        additional_comp_cards.appendChild(img);
        
            if(game.comp_sum_of_cards >= 21){
                game.who_wins();
                return;
            }else if(game.comp_sum_of_cards === (21-1) && game.player_sum_of_cards <= 19){
                game.who_wins();
                return;
            }else if(game.comp_sum_of_cards === (21-2) && game.player_sum_of_cards <= 18){
                game.who_wins();
                return;
            }else if(game.comp_sum_of_cards === (21-3) && game.player_sum_of_cards <= 17){
                game.who_wins();
                return;
            }else if(game.comp_sum_of_cards === (21-4) && game.player_sum_of_cards <= 16){
                game.who_wins();
                return;
            }else{
               game.computer_new_cards(); 
            }
    },
    
    get_winner: function(){
        
        if(game.player_sum_of_cards === 0 && game.comp_sum_of_cards === 0){
            return;
        }
        
        var player_sum = 0;
        var comp_sum = 0;
        
        var sum = (accumulator, currentValue) => accumulator + currentValue;
        
        player_sum = game.player_cards_value.reduce(sum);
        game.player_sum_of_cards = player_sum;
        
        if(game.player_new_cards_value.length){
            game.player_sum_of_cards = player_sum + game.player_new_cards_value.reduce(sum);
        }
        
        if(game.player_new_cards_value.length){
            player_sum += game.player_new_cards_value.reduce(sum);
        }
        
        comp_sum = game.comp_cards_value.reduce(sum);
            
            if(player_sum > 21){
                game.who_wins();
                return;
            }
        
            if(comp_sum >= 21){
                game.who_wins();
                return;
            }else if(comp_sum === (21-1) && game.player_sum_of_cards <= 19
                    && player_sum !== 21 && (comp_sum !== player_sum)){
                game.who_wins();
                return;
            }else if(comp_sum === (21-2) && game.player_sum_of_cards <= 18
                    && player_sum !== 21 && (comp_sum !== player_sum)){
                game.who_wins();
                return;
            }else if(comp_sum === (21-3) && game.player_sum_of_cards <= 17
                    && player_sum !== 21 && (comp_sum !== player_sum)){
                game.who_wins();
                return;
            }else if(comp_sum === (21-4) && game.player_sum_of_cards <= 16
                    && player_sum !== 21 && (comp_sum !== player_sum)){
                game.who_wins();
                return;
            }else{
                game.computer_new_cards();
            }
        
        
    },
    
    
    who_wins: function(){
        console.log(game.player_sum_of_cards);
        console.log(game.comp_sum_of_cards);
        
        var i;
        additional_player_cards.innerHTML = "";
        additional_comp_cards.innerHTML = "";
        game.player_cards_value = [];
        game.comp_cards_value = [];
        game.player_sum_of_cards = 0;
        game.comp_sum_of_cards = 0;
        game.start_game();
    },
    
    end_game: function(){
        
        player_first_card = "";
        player_first_card.style.backgroundColor = "transparent";
        
        player_second_card = "";
        player_second_card.style.backgroundColor = "transparent";
        
        
        
        comp_first_card = "";
        comp_first_card.style.backgroundColor = "transparent";
        
        comp_second_card= "";
        comp_second_card.style.backgroundColor = "transparent";
        
        
        
    }

}


start_game_btn.addEventListener("click",game.start_game);
add_card_btn.addEventListener("click",game.player_get_new_card);
end_turn_btn.addEventListener("click",game.get_winner);
end_game_btn.addEventListener("click",game.end_interval);










