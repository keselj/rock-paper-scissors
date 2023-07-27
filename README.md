# Rock Paper Scissors

Welcome to the Rock Paper Scissors project! This is my second project as part of the JavaScript Full Course 2023, where we learned the basics of HTML, CSS, and implemented images into the project. If you want to check out the full course, you can find it [here](https://www.youtube.com/watch?v=SBmSRK3feww).

## Project Overview

The Rock Paper Scissors project is a classic game where you can play against the computer. The game involves making your move by clicking on the corresponding buttons (rock, paper, or scissors), or you can use the keyboard shortcuts ('r' for rock, 'p' for paper, 's' for scissors) to make your move. The computer will randomly select its move, and the winner is determined based on the rules: rock beats scissors, scissors beat paper, and paper beats rock.

## Project Files

The project consists of three main files: `index.html`, `rock-paper-scissors.css`, and `rock-paper-scissors.js`.

index.html

This file serves as the user interface for the Rock Paper Scissors game. It contains the following elements:

- A title "Rock Paper Scissors"
- Three buttons representing rock, paper, and scissors moves, each with corresponding images
- A section to display the game result (win, lose, or tie)
- A section to display the current score (wins, losses, ties)
- "Reset Score" button to reset the score to zero
- "Auto Play" button to enable automatic gameplay against the computer
- A section for displaying a confirmation prompt when resetting the score

rock-paper-scissors.css

The CSS file provides styling for the Rock Paper Scissors game interface. It defines the layout and appearance of the elements on the page. Some of the CSS classes used in the file are:

- .title: Styles the title of the game.
- .move-icon: Styles the images for the rock, paper, and scissors moves.
- .move-buttons: Styles the buttons for player moves.
- .result: Styles the game result text.
- .score: Styles the score display.
- .reset-score-button and .auto-play-button: Styles the "Reset Score" and "Auto Play" buttons respectively.

rock-paper-scissors.js

The JavaScript file contains the functionality for the Rock Paper Scissors game. It handles player moves, computer moves, determining the winner, updating the score, and enabling auto play. The key functions in the file are:

- playGame(playerMove): This function is called when the player makes a move (rock, paper, or scissors). It generates the computer's move, determines the game result, updates the score, and displays the result on the page.
- updateScoreElement(): This function updates the displayed score on the page based on the current score stored in the score variable and local storage.
- pickComputerMove(): This function randomly selects the computer's move (rock, paper, or scissors).
- autoPlay(): This function enables auto play mode, where the computer plays against itself automatically every second until the player stops it by clicking the "Auto Play" button again.

## Getting Started

To play the Rock Paper Scissors game, open the index.html file in a web browser. Click on the buttons representing your move (rock, paper, or scissors), or use the keyboard shortcuts ('r' for rock, 'p' for paper, 's' for scissors) to make your move. The game will display the result (win, lose, or tie) and update the score accordingly. You can also use the "Auto Play" button to enable automatic gameplay against the computer.
