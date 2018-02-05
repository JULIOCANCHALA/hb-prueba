class Grid {
  constructor (node) {
    this.node = node
    this.setGrid()
    this.index=0
    this.play
    this.stop
    this.game
    this.cards=[]
    this.setclick()
  }

  setGrid () {
    this.cards=this.node.querySelectorAll('.card')
    this.cards[0].classList.add('card-Selected')

    this.play=this.node.querySelector('.play')
    this.stop=this.node.querySelector('.stop')
  }
  setclick(){
    this.node.addEventListener('click',function(event){
      if (event.target.classList.contains('card')) {
        const indexNew = Array.from(this.cards).indexOf(event.target)
        this.cards[index].classList.remove('card-Selected')
        this.index=indexNew
        this.cards[index].classList.add('card-Selected')
        this.game==1
      }
    })

    this.play.addEventListener('click',this.playGame().bind(this))
    this.stop.addEventListener('click',this.stopGame().bind(this))
  }

  playGame(){
    var i
    if(this.game===1){
      for(i=this.index;i<this.cards.lenght;i++){
        this.index=i;
      }
    } 
  }

  stopGame(){
    this.game=0;
  }



}

/* eslint-disable no-new */
new Grid(document.querySelector('.grid')) // this goes on the index.js
