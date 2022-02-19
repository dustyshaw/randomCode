
//---------------------Sets sticks left at the beginning to 20.  sets a counter i.
let SticksLeft = 20;
let i = 0;

//---------------------Loop that repeats game until someone wins -----------
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

