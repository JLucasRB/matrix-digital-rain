class matLine {
    constructor(phrase, fadeLen, ind){
        this.phrase = phrase;
        this.len = phrase.length;
        this.fadeLen = fadeLen;
        this.index = 0;
        this.x = random(size, width-size);
        this.y = -random(size);
        this.ind = ind;
        this.vel = random(0.5,1.5);
        this.limit = random(height);
    }

    show(){
        for(let i in this.phrase) {
            if(size+i*size+this.y < 0) continue;
            if(i > this.index) break;
            if(i < this.index - this.fadeLen) continue;
            let dist = this.index - i + 1;
            let grey = 1/(dist/(this.fadeLen+5));
            fill(20*grey,154*grey,34*grey,grey*grey*25);
            text(this.phrase[i], this.x, size+i*size+this.y);
        }
        if(this.phrase.length < this.len-2) return;
        fill(255,255,255,200);
        text('▊', this.x, size+(this.index)*size +this.y);
    }

    update(){
        this.index+=this.vel;

        if(this.index*size > this.limit){
            this.phrase = this.phrase.substring(1,this.len);
        }

        if(this.phrase === "") lines.splice(lines.indexOf(this),1);
    }
}