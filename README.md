# BABBEL Coding Challenge

## PREVIEW

![](sample.gif)

## Purpose

The purpose of this assignment was to build a local game where players compete by rolling dice in turn. The first Player to reach the designated score wins.

### How the Game Works
The Game starts off with a total of 2 to 4 Players. Each Player takes a turn rolling by clicking on the `roll` button. The button generates a score between 1 and 6 , which is added to the individual Players's score. This process continues until a player scores equal to or highter than the `scoreToWin`.

After a player wins he is shown a congratulatory message and an option to play again

## How to Run React Application

1. First run:

```sh
npm install
```

2. Once all the packages are installed then run:

```sh
npm run start
```

Navigate to http://localhost:8080 to see the application running.

A server will also start on http://localhost:8000


## API endpoints
Make sure you have run `npm run start` so the server is available.

- GET: http://localhost:8000/api/game
- POST: http://localhost:8000/api/game
  - body (JSON)
    - matchId: **string**
    - winnerId: **string**


## HOW TO RUN TEST
Run the command:

```sh
npm test
```

This will look at the *.test file  and run it.



