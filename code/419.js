/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var count=0;
    for(let i=0;i<board.length;i++)
        for(let j=0;j<board[i].length;j++)
        {
            if(board[i][j]==="X")
            {
                if(i===0)
                {
                    if(j===0)
                    {
                        count++;
                    }
                    else if(board[i][j-1]===".")
                    {
                        count++;
                    }

                }
                else if(j===0)
                {
                    if(board[i-1][j]===".")
                    {
                        count++;
                    }
                }
                else {
                    if (board[i-1][j]==="."&&board[i][j-1]===".")
                    {
                        count++;
                    }
                }


            }
        }
    return count;
};