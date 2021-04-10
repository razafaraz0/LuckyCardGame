import { getRandomInteger } from './Player.js'


// This test check if the roll's number is between 1 and 6
test('getRandomInteger', ()=>{
    const value = getRandomInteger(1, 6);

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(7);
})

// ---------------------------------------------------------------
//      Testing i couldnot perform due to time contraints
// ---------------------------------------------------------------


// 1) Checking if the Player Component is rendering correctly using snapshot

// 2) Testing whether the reducer should return the new state after applying action to the previous state

// 3) Testing actions creators of redux ( i.e 'increment', 'setMatchID', 'changeGameState')

