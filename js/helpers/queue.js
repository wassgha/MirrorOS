class Queue{

  constructor(){
    this.sequence = []
  }

  enqueue(widget){
    const index = this.sequence.indexOf(widget)
    if(index !== -1){
      this.sequence.splice(index, 1)
    }
    this.sequence.unshift(widget)
    this.correctZ()
  }

  correctZ(){
    const size = this.sequence.length
    this.sequence.forEach(function(widget, index){
      $(widget).css("z-index", size - index);
    })
  }
}

export default Queue
