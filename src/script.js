document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name:'gara',
            image:'src/images/gara.jpeg'
        },
        {
            name:'gara',
            image:'src/images/gara.jpeg'
        },
        {
            name:'hinata',
            image:'src/images/hinata.jpeg'
        },
        {
            name:'hinata',
            image:'src/images/hinata.jpeg'
        },
        {
            name:'naruto',
            image:'src/images/naruto.jpeg'
        },
        {
            name:'naruto',
            image:'src/images/naruto.jpeg'
        },
        {
            name:'sasuke',
            image:'src/images/sasuke.jpeg'
        },
        {
            name:'sasuke',
            image:'src/images/sasuke.jpeg'
        },
        {
            name:'kakashi',
            image:'src/images/minato.jpeg'
        },
        {
            name:'kakashi',
            image:'src/images/minato.jpeg'
        },
        {
            name:'sakura',
            image:'src/images/sakura.jpeg'
        },
        {
            name:'sakura',
            image:'src/images/sakura.jpeg'
        }
    ]

    cardArray.sort(()=>0.5-Math.random());
    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result')
    cardChosen=[]
    cardChosenId=[]
    cardWon=[]

    //creating your board;
  function createBoard(){

    for(let i=0;i<cardArray.length;++i){
        var card = document.createElement('img');
        card.setAttribute('src','src/images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener("click",cardClicked)
        grid.appendChild(card);
    }
  }

  createBoard();
  //card clicked



  function cardClicked(){
      var cardId = this.getAttribute('data-id');
      cardChosenId.push(cardId);
      cardChosen.push(cardArray[cardId].name);
      this.setAttribute('src',cardArray[cardId].image);
      if(cardChosenId.length==2){
          setTimeout(checkmatch,500);
      }
  }

  function checkmatch(){
      var cards = document.querySelectorAll('img');
      const cardId1 = cardChosenId[0];
      const cardId2 = cardChosenId[1];
      if(cardChosen[0]==cardChosen[1]){
          alert('match');
          cards[cardId1].setAttribute('src','src/images/white.png');
          cards[cardId2].setAttribute('src','src/images/white.png');
          cardWon.push(cardChosen)

      }
      else{
          alert('mismatch')
          cards[cardId1].setAttribute('src','src/images/blank.png');
          cards[cardId2].setAttribute('src','src/images/blank.png');
      }
      cardChosen=[]
      cardChosenId=[]
      result.textContent  = 'Score: '+cardWon.length;
      if(cardWon.length == cardArray.length/2){
          result.textContent='You won pal'
      }
  }

})