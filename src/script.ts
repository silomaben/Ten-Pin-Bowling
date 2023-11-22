class TenPinGame{
    private rolls: string[];
    constructor(rolls:string){
        this.rolls = rolls.split(" ");

        console.log(this.rolls);
        console.log(this.rolls.length);
        
    }

    getScore(): number {
        let turns:string[] = [];
        
        for (let i = 0; i < this.rolls.length; i++){
            const roll = this.rolls[i];
            let score : number = 0;

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
                if(roll)
                if(this.rolls[i+1].includes('/') || this.rolls[i+1].includes('x')){
                    score += 10
                }else{
                    score +=  parseInt(this.rolls[i + 1][0], 10);
                }
                const turnScore = 10
                turns.push(10)
            }
        }

        return 9
    }


}

let we = new TenPinGame('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5')