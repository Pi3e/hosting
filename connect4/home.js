
let player = "";
let player1 = "";
let player2 = "";
let mrPotatoHead=0;
let mrsPotatoHead=0;
let gridPosition=[];
let newId=[];
let cell =[];
let winner=0;
let winningArrays = [
    [0,1,2,3], [1,2,3,4], [2,3,4,5], [3,4,5,6],
    [7,8,9,10], [8,9,10,11], [9,10,11,12], [10,11,12,13],
    [14,15,16,17], [15,16,17,18], [16,17,18,19], [17,18,19,20],
    [21,22,23,24], [22,23,24,25], [23,24,25,26], [24,25,26,27],
    [28,29,30,31], [29,30,31,32], [30,31,32,33], [31,32,33,34],
    [35,36,37,38], [36,37,38,39], [37,38,39,40], [38,39,40,41], 
    [0,7,14,21], [7,14,21,28], [14,21,28,35],
    [1,8,15,22], [8,15,22,29], [15,22,29,36],
    [2,9,16,23], [9,16,23,30], [16,23,30,37],
    [3,10,17,24], [10,17,24,31], [17,24,31,38],
    [4,11,18,25], [11,18,25,32], [12,25,32,39],
    [5,12,19,26], [12,19,26,33], [13,26,33,40],
    [6,13,20,27], [13,20,27,34], [14,27,34,41], 
    [0,8,16,24], [1,9,17,25], [2,10,18,26], [3,11,19,27],
    [7,15,23,31], [8,16,24,32], [9,17,25,33], [10,18,26,34],
    [14,22,30,38], [15,23,31,39], [16,24,32,40], [17,25,33,41],
    [3,9,15,21], [4,10,16,22], [5,11,17,23], [6,12,18,24],
    [10,16,22,28], [11,17,23,29], [12,18,24,30], [13,19,25,31], 
    [17,23,29,35], [18,24,30,36], [19,25,31,37], [20,26,32,38],
]; 

function buttonFunction (){
    player1 = document.getElementById('p1').value;
    player2 = document.getElementById('p2').value;
    if (player1.length === 0 || player2.length ===0){alert("Insert Names to begin");} 
    else if (player1 === player2){alert('choose different names to begin');}       
    else {
        document.getElementById('playerVar').style.fontFamily = 'sans-serif';
        document.getElementById('playerVar').innerHTML = player1 + '\'s turn';
        mrsPotatoHead++;
    }
    player='1';
}

function clicked(id){
    if (winner===0 && mrsPotatoHead>=1){
        for (i=5; i>=0;i--){newId=7*i +(parseInt(id)%7);
            if (mrPotatoHead<41 && !gridPosition.includes(newId)){{gridfill()}} 
            else if (!gridPosition.includes(newId)){
                document.getElementById(newId).style.backgroundColor = 'cornflowerblue';
                document.getElementById('playerVar').style.display = 'none';
                document.getElementById('result').innerHTML =  
                'The game has drawn. Click the reset button to play again';
            }
        }
    }
    else if (winner===0){alert ('Enter names then click the done button')}
    else if (winner===1){alert ('There is already a winner');}
}
        
function gridfill(){
    player === '1' ? checkPlayer1():checkPLayer2()
    mrPotatoHead++;
    gridPosition.push(newId);   
}
    
function checkPlayer1(){
    document.getElementById(newId).style.backgroundColor = 'indianred';
    let squares = document.querySelectorAll('.cell');
    squares[newId].classList.add('playerOne')
    checkWin()
    player = '2';
    i=-1;
    document.getElementById('playerVar').innerHTML = player2 + '\'s turn';
}

function checkPLayer2(){
    document.getElementById(newId).style.backgroundColor = 'cornflowerblue';
    let squares = document.querySelectorAll('.cell');
    squares[newId].classList.add('playerTwo')
    checkWin()
    player = '1';
    i=-1;
    document.getElementById('playerVar').innerHTML = player1 + '\'s turn';
}

function checkWin(){
    let squares = document.querySelectorAll('.cell');
    
    for (let i=0; i<winningArrays.length; i++){
        cell = winningArrays[i];
        const cell1 = squares[winningArrays[i][0]]
        const cell2 = squares[winningArrays[i][1]]
        const cell3 = squares[winningArrays[i][2]]
        const cell4 = squares[winningArrays[i][3]]
        if (
            cell1.classList.contains('playerOne') &&
            cell2.classList.contains('playerOne') &&
            cell3.classList.contains('playerOne') &&
            cell4.classList.contains('playerOne')
        ){
            document.getElementById('playerVar').style.display = 'none';
            document.getElementById('result').style.color = '#004492';
            document.getElementById('result').style.fontSize = '40px';
            document.getElementById('result').innerHTML = player1 + ' has won';
            winner=1;
        }
        else if (
            cell1.classList.contains('playerTwo') &&
            cell2.classList.contains('playerTwo') &&
            cell3.classList.contains('playerTwo') &&
            cell4.classList.contains('playerTwo')
        ){
            document.getElementById('playerVar').style.display = 'none';
            document.getElementById('result').style.color = '#004492';
            document.getElementById('result').style.fontSize = '40px';
            document.getElementById('result').innerHTML = player2 + ' has won';
            winner=1;
        }
    }
}

function resetFunction(){
    for (i=0; i<42; i++){
        document.getElementById(i).style.backgroundColor = 'white';
    }
    player = "";
    player1 = "";
    player2 = "";
    mrPotatoHead=0;
    gridPosition=[];
    newId='';
    location.reload();
}

