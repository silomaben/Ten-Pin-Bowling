export class TenPinGame {
    private rolls: string[];

    constructor(rolls: string) {
        this.rolls = rolls.split(" ");
        console.log(this.rolls);
        console.log(this.getScore());
    }

    getScore(): number {
        let score: number = 0;

        for (let i = 0; i < this.rolls.length; i++) {
            const roll = this.rolls[i];

            // console.log(`ii is ${i}`);
            if ((roll === 'X' || roll === 'x') && i <10 ) {
                score += 10;
                if (this.rolls[i + 1]) {
                    if (this.rolls[i + 1].includes('/')) {
                        score += 10 + parseInt(this.rolls[i + 1][0], 10);
                    } else if (this.rolls[i + 1] === 'X' || this.rolls[i + 1] === 'x') {
                        
                        
                        score += 10;
                        // console.log('tuko uku');

                        if (this.rolls[i + 2]) {
                            if (this.rolls[i + 2].includes('/') || this.rolls[i + 2] === 'x' || this.rolls[i + 2] === 'X') {
                                score += 10;
                                // console.log(`Strike + Strike + Bonus: ${score}`);
                            } else {
                                console.log("else if");
                                score += parseInt(this.rolls[i + 2][0], 10);
                                // console.log(`Strike + Strike + Value: ${score}`);
                            }
                        }
                    } else {
                        console.log(`i is ${i}`);
                        if (!this.rolls[i + 1][0]?.includes('-')) {
                            score += parseInt(this.rolls[i + 1][0], 10);
                        }
                        if (this.rolls[i + 1][1] && !this.rolls[i + 1][1]?.includes('-')) {
                            score += parseInt(this.rolls[i + 1][1], 10);
                        }
                    }
                }
            } else if (roll.includes('/')) {
                score += 10;
                if (this.rolls[i + 1]) {
                    if (this.rolls[i + 1].includes('/') || this.rolls[i + 1].includes('x')) {
                        score += 10;
                    } else {
                        score += parseInt(this.rolls[i + 1][0], 10);
                    }
                }
            } else {
                if (this.rolls[i + 1] && i <10) {
                    if (!this.rolls[i + 1][0]?.includes('-')) {
                        score += parseInt(this.rolls[i + 1][0], 10);
                    }
                    if (this.rolls[i + 1][1] && !this.rolls[i + 1][1]?.includes('-')) {
                        score += parseInt(this.rolls[i + 1][1], 10);
                    }
                    
                }
            }
            console.log(`${i}  ${score}`);
        }
        
        return score;
    }
}

let we = new TenPinGame('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');



