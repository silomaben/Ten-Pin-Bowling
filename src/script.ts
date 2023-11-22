class TenPinGame{
    private rolls: string[];
    constructor(rolls:string){
        this.rolls = rolls.split(" ");

        console.log(this.rolls);
        console.log(this.getScore());
        
    }

    getScore(): number {
        let turns:string[] = [];
        let score : number = 0;
        
        for (let i = 0; i < this.rolls.length; i++){
            const roll = this.rolls[i];
            console.log(`this is  : ${parseInt(this.rolls[i][0], 10)}`);


            if (roll==='x'){
                score += 10;
                if(this.rolls[i+1].includes('/')){
                    score += 10 + parseInt(this.rolls[i + 1][0], 10);
                } else if( this.rolls[i+1]==="x"){
                    score += 10
                    if(this.rolls[i+2].includes('/') || this.rolls[i+2].includes('x')){
                        score +=10
                    } else {
                        score +=  parseInt(this.rolls[i + 2][0], 10);
                        console.log(`this is  : ${parseInt(this.rolls[i + 2][0], 10)}`);
                        
                    }
                } else {
                    if(!this.rolls[i + 1][0].includes('-')){
                        score += parseInt(this.rolls[i+1][0], 10)
                    }
                    if(!this.rolls[i + 1][1].includes('-')){
                        score += parseInt(this.rolls[i+1][1], 10)
                    }
                }

            }else if (roll.includes('/') ){
                score += 10;
                if(this.rolls[i+1]){
                    if(this.rolls[i+1].includes('/') || this.rolls[i+1].includes('x')){
                        score += 10
                    }else{
                        score +=  parseInt(this.rolls[i + 1][0], 10);
                    }
                }
            }else {

                if(this.rolls[i + 1]){
                    
                if(!this.rolls[i + 1][0].includes('-')){
                    score += parseInt(this.rolls[i+1][0], 10)
                }
                if(this.rolls[i + 1][1]){
                    if(!this.rolls[i + 1][1].includes('-')){
                        score += parseInt(this.rolls[i+1][1], 10)
                    }
                }
                }
            } 
            console.log(`${i}  ${score}`);
            
        }

        return score
    }


}

let we = new TenPinGame('X X X X X X X X X X X X');