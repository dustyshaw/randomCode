
// let currentPlayer = 1;
// while (currentPlayer === 1);
// {
//     while (SticksLeft > 3) 
//     {
//         let sticksChosen = prompt(`There are ${SticksLeft} Sticks Left.  How many do you want to pick up, Player1?` );

//         if (sticksChosen > 3 || sticksChosen < 1) 
//         {
//             alert(`You can only pick up 1 to 3 sticks per turn`);
//         }
//         else
//         {
//             SticksLeft = (SticksLeft - sticksChosen);
//         }

//         Player2Turn(SticksLeft);
//         alert(`Player2 chose ${randomNumber} and now there ${Player2SticksLeft} sticks left!`);
//         currentPlayer = 2;
//     }
// }
// while (currentPlayer === 2)
// {
//     while (SticksLeft > 3) 
//     {

//         let sticksChosen = prompt(`There are ${SticksLeft} Sticks Left.  How many do you want to pick up, Player1?` );

//         if (sticksChosen > 3 || sticksChosen < 1) 
//         {
//             alert(`You can only pick up 1 to 3 sticks per turn`);
//         }
//         else
//         {
//             SticksLeft = (SticksLeft - sticksChosen);
//         }


//         //alert(`Player2 chose ${randomNumber} and now there ${Player2SticksLeft} sticks left!`);
//         currentPlayer = 1;
//     }
// }

// function Player2Turn(SticksLeft)
// {
//     randomNumber = getRandomInt(4);
//     if (getRandomInt < 1)
//     {
//         randomNumber = getRandomInt(4);
//     }
//     else
//     {
//         SticksLeft = (SticksLeft - randomNumber);
//     }
//     return Player2SticksLeft;
// }

// function getRandomInt(max) 
// {
//     return Math.floor(Math.random() * max);
//   }






//---------------------Sets sticks left at the beginning to 20.  sets a counter i.
let SticksLeft = 20;
let i = 0;

//---------------------Loop that determines if SticksLeft is > 3 -----------
while (SticksLeft != 0) 
{
    SticksLeft = Player1Turn(SticksLeft);
    SticksLeft = Player2Turn(SticksLeft);
}

//---------------------Functions--------------------------------------------
function Player1Turn(SticksLeft) 
{
    if (SticksLeft === 1)
    {
        return alert(`Player1 took the last stick! Player2 Won! Better luck next time. `);
    }
    let SticksChosen = prompt(`player one, choose how many sticks.  There are ${SticksLeft} left`);
    if (SticksLeft > 3) 
    {
        if (SticksChosen < 1 || SticksChosen > 3) {
            alert(`You can only chose 1 to 3 sticks.`);
            return SticksLeft;
        }
        return (SticksLeft - SticksChosen);
    }
    if (SticksLeft <= 3)
    {
        if (SticksChosen > SticksLeft) {
            alert(`You can only chose less sticks then there are sticks left.`);
            return SticksLeft;
        }
        else
        {
            return (SticksLeft - SticksChosen);
        }
    }
}

function Player2Turn(SticksLeft) 
{
    if (SticksLeft == 1)
    {
        return alert(`Player2 took the last stick! Player1 Won!`);
    }
    let player2SticksChosen = prompt(`player two, choose how many sticks.  There are ${SticksLeft} left`);
    if (SticksLeft > 3)
    {
        if (player2SticksChosen < 1 || player2SticksChosen > 3) 
        {
            alert(`You can only chose 1 to 3 sticks.`);
            //Player2Turn(SticksLeft);
            return SticksLeft;
        }
        return (SticksLeft - player2SticksChosen);
    }
    if (SticksLeft <= 3)
    {
        if (player2SticksChosen > SticksLeft) {
            alert(`You can only chose less sticks then there are sticks left.`);
            return SticksLeft;
        }
        else
        {
            return (SticksLeft - player2SticksChosen);
        }
    }
}

