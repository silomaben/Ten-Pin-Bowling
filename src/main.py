# Define a class to represent a bowling game
class BowlingGame:
 
    # Initialize the game with an empty list of rolls
    def __init__(self):
        self.rolls = []
 
    # Record a roll with the number of pins knocked down
    def roll(self, pins):
        # Validate the input
        if not isinstance(pins, int) or pins < 0 or pins > 10:
            raise ValueError("Invalid number of pins")
        # Append the roll to the list
        self.rolls.append(pins)
 
    # Calculate the total score for the game
    def score(self):
        # Initialize the score and the index
        score = 0
        i = 0
        # Loop through 10 frames
        for frame in range(10):
            # Check if it is a strike
            if self.rolls[i] == 10:
                # Add 10 plus the next two rolls
                score += 10 + self.rolls[i+1] + self.rolls[i+2]
                # Increment the index by one
                i += 1
            # Check if it is a spare
            elif self.rolls[i] + self.rolls[i+1] == 10:
                # Add 10 plus the next roll
                score += 10 + self.rolls[i+2]
                # Increment the index by two
                i += 2
            # Otherwise, it is an open frame
            else:
                # Add the sum of the two rolls
                score += self.rolls[i] + self.rolls[i+1]
                # Increment the index by two
                i += 2
        # Return the score
        return score
 
 
"""
(When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)
 
X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150
"""
 
def main():
    # Create a game
    game1 = BowlingGame()
    # Roll 12 strikes
    for i in range(12):
        game1.roll(10)
    # Print the score
    print(game1.score())
 
    # Create a game
    game2 = BowlingGame()
    # Roll 10 pairs of 9 and miss
    for i in range(10):
        game2.roll(9)
        game2.roll(0)
    # Print the score
    print(game2.score())
 
    # Create a game
    game3 = BowlingGame()
    # Roll 10 pairs of 5 and spare, with a final 5
    for i in range(10):
        game3.roll(5)
        game3.roll(5)
    game3.roll(5)
    # Print the score
    print(game3.score())
 
if __name__ == "__main__":
    main()
 