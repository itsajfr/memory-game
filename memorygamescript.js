document.addEventListener('DOMContentLoaded',()=>{

    const cardsarr = [
        {
            name:'fries',
            img:'assets/fries.png'
        },
        {
            name:'fries',
            img:'assets/fries.png'
        },
        {
            name:'cheeseburger',
            img:'assets/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'assets/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'assets/hotdog.png'
        },
        {
            name:'hotdog',
            img:'assets/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'assets/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'assets/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'assets/milkshake.png'
        },
        {
            name:'milkshake',
            img:'assets/milkshake.png'
        },
        {
            name:'pizza',
            img:'assets/pizza.png'
        },
        {
            name:'pizza',
            img:'assets/pizza.png'
        }




    ];

 /////////////////////first we have to shffle cardsarr
 /////durstenfeld algo
//    no shuffle Way
//    cardArray.sort(() => 0.5 - Math.random())
 function shufflearr(){
        for (let i = cardsarr.length-1 ; i>0 ; i--){
        let j = Math.floor(Math.random()*(i+1));
        [cardsarr[i],cardsarr[j]] = [cardsarr[j],cardsarr[i]];
        };
    };


    const grid= document.querySelector('.grid');
    const result = document.querySelector('#result');
    const resultdiv = document.querySelector('.resultdiv');
    let chosencardsname =  [];
    let chosencardsid =  [];
    let foundmatches = [];

    ///////////////creating boeard num of images
    ///////////data-smth is for storring data abbout smth
    function createboard(){
        for (let i = 0; i < cardsarr.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src','assets/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipcard);
            grid.appendChild(card);
            
        }

    };
    //////////////check if chosen carsds match
    function checkformatch(){
        let cards  = document.querySelectorAll('img');
        let firstpickid = chosencardsid[0];
        let secondpickid = chosencardsid[1];
        ////////not to pick the same pick
        if(firstpickid === secondpickid) {
            cards[firstpickid].setAttribute('src', 'assets/blank.png')
            cards[secondpickid].setAttribute('src', 'assets/blank.png')
            showMessage('You have clicked the same image!','#fff');
        }
        else if (chosencardsname[0] === chosencardsname[1]) {
            cards[firstpickid].setAttribute('src','assets/white.png');
            cards[secondpickid].setAttribute('src','assets/white.png');
            cards[firstpickid].removeEventListener('click', flipcard);
            cards[secondpickid].removeEventListener('click', flipcard)
            console.log(chosencardsname[0] +' '+chosencardsname[1]);
            showMessage('You found a match','#DAF7A6');
            foundmatches.push(chosencardsname);
        } else {
            console.log(chosencardsname[0] +' '+chosencardsname[1]);
            cards[firstpickid].setAttribute('src','assets/blank.png');
            cards[secondpickid].setAttribute('src','assets/blank.png');
            showMessage('oops,not a match','#F28771')
        } 
        //clear arrays for new picks
        chosencardsid = [];
        chosencardsname = [];
        result.textContent = foundmatches.length;
        if (foundmatches.length === cardsarr.length/2) {
            resultdiv.style.position = 'fixed';
            resultdiv.style.top = '50%';
            resultdiv.style.left = '50%';
            resultdiv.style.transform = 'translateX(-50%)';
            resultdiv.style.padding = '10px 20px';
            resultdiv.style.backgroundImage ='url(https://i.gifer.com/6ob.gif)'
            resultdiv.style.fontWeight ='bold';
            resultdiv.textContent = 'Congratulations! You found them all!'
            
        } 
    }
     
    ////////////flip card when clicked
    function flipcard(){
       let cardid = this.getAttribute('data-id');
       chosencardsname.push(cardsarr[cardid].name);
       chosencardsid.push(cardid);
       this.setAttribute('src', cardsarr[cardid].img);
       //////we stored chosen ones in ann array noe we see if we chose 2 or not if yes check for match
        if (chosencardsname.length === 2) {
            setTimeout(checkformatch,300);
            
        }

    }

    function showMessage(message,color) {
        const messagediv = document.querySelector(".msgdiv");
        messagediv.textContent = message;
        messagediv.style.position = 'fixed';
        messagediv.style.top = '20px';
        messagediv.style.left = '50%';
        messagediv.style.transform = 'translateX(-50%)';
        messagediv.style.padding = '10px 20px';
        messagediv.style.backgroundColor = '#333';
        messagediv.style.color = color;
        messagediv.style.borderRadius = '5px';
        messagediv.style.opacity='1';
        
    
        setTimeout(function() {
           messagediv.style.opacity='0';
            messagediv.textContent=" "
        }, 2000);
      
      }
    shufflearr();
    createboard();
  





});
