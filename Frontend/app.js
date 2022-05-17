let board = [
    ["r", "e", "b", "q", "e", "e", "e", "r"],
    ["p", "e", "p", "e", "k", "p", "p", "p"],
    ["e", "e", "p", "e", "e", "n", "e", "e"],
    ["e", "e", "b", "e", "e", "e", "e", "e"],
    ["e", "e", "B", "e", "P", "e", "e", "e"],
    ["e", "Q", "N", "e", "e", "N", "e", "e"],
    ["P", "P", "e", "K", "e", "P", "P", "P"],
    ["R", "e", "B", "e", "e", "e", "e", "R"]
];
function isDigit(s) {
    return !isNaN(s - parseFloat(s));
}
function setBoardByFEN(FENo) {
    FENo = FENo.toString();
    let FEN = FENo.substring(0, FENo.indexOf(" ")); // to remove (w and b from FEN)
    let board = [...Array(8)].map(e => Array(8));
    let FENTokens = FEN.split("/");
    let x = 0, y = 0;
    for (let p = 0; p < FENTokens.length; p++) {
        let temp = FENTokens[p];
        for (let j = 0; j < temp.length; j++) {
            if (isDigit(temp.charAt(j))) {
                let numberOfEmpty = parseInt(temp.charAt(j));
                while (numberOfEmpty != 0) { // set e for every number in FEN
                    board[x][y++] = "e";
                    numberOfEmpty--;
                }
            } else {
                board[x][y++] = (temp.charAt(j));
            }
        }
        y = 0; // y will be 0 for every row
        x++; // next row
    }
    return board;
}
// console.log(setBoardByFEN("1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"));
board = setBoardByFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w");
// board = setBoardByFEN("1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b");

function createBoard() {
    const center = document.createElement('center');
    const ChessTable = document.createElement('table');
    for (let i = 0; i < 8; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            const td = document.createElement('td');
            if ((i + j) % 2 == 0) {
                td.setAttribute('class', 'cell whitecell');
                tr.appendChild(td);
            } else {
                td.setAttribute('class', 'cell blackcell');
                tr.appendChild(td);
            }
        }
        ChessTable.appendChild(tr);
    }
    center.appendChild(ChessTable);
    ChessTable.setAttribute('cellspacing', '0');
    document.body.appendChild(center);
}
createBoard();

function setImagesOnBoard() {
    const grid = document.querySelectorAll("td");
    let k = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (grid[k].innerText === 'e') {
                grid[k].innerText = "";
            } else if (grid[k].innerText === 'p') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/black_pawn.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'P') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/white_pawn.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'r') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/black_rook.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'n') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/black_knight.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'b') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/black_bishop.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'q') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/black_queen.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'k') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/black_king.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'R') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/white_rook.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'N') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/white_knight.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'B') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/white_bishop.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'Q') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/white_queen.png";
                grid[k].appendChild(image);
            } else if (grid[k].innerText === 'K') {
                grid[k].innerText = "";
                const image = document.createElement("img");
                image.src = "Pieces/white_king.png";
                grid[k].appendChild(image);
            }
            k++;
        }
    }
}


function initPieces(board) {
    const grid = document.querySelectorAll("td");
    let k = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            grid[k++].innerText = board[i][j];
        }
    }
}



let fen = [["rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b"],
["rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w"],
["rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b"],
["rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w"],
["rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b"],
["rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w"],
["rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N1P3/PP3PPP/R1BQKBNR b"],
["rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/2N1P3/PP3PPP/R1BQKBNR w"],
["rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/2N1PN2/PP3PPP/R1BQKB1R b"],
["rn1qkb1r/pp3ppp/2p1pn2/3p1b2/2PP4/2N1PN2/PP3PPP/R1BQKB1R w"],
["rn1qkb1r/pp3ppp/2p1pn2/3p1b2/2PP3N/2N1P3/PP3PPP/R1BQKB1R b"],
["rn1qkb1r/pp3ppp/2p1pnb1/3p4/2PP3N/2N1P3/PP3PPP/R1BQKB1R w"],
["rn1qkb1r/pp3ppp/2p1pnb1/3p4/2PP3N/2N1P3/PP1B1PPP/R2QKB1R b"],
["r2qkb1r/pp1n1ppp/2p1pnb1/3p4/2PP3N/2N1P3/PP1B1PPP/R2QKB1R w"],
["r2qkb1r/pp1n1ppp/2p1pnN1/3p4/2PP4/2N1P3/PP1B1PPP/R2QKB1R b"],
["r2qkb1r/pp1n1pp1/2p1pnp1/3p4/2PP4/2N1P3/PP1B1PPP/R2QKB1R w"],
["r2qkb1r/pp1n1pp1/2p1pnp1/3p4/2PP4/2N1P1P1/PP1B1P1P/R2QKB1R b"],
["r2qk2r/pp1n1pp1/2p1pnp1/3p4/1bPP4/2N1P1P1/PP1B1P1P/R2QKB1R w"],
["r2qk2r/pp1n1pp1/2p1pnp1/3p4/1bPP4/1QN1P1P1/PP1B1P1P/R3KB1R b"],
["r2qk2r/1p1n1pp1/2p1pnp1/p2p4/1bPP4/1QN1P1P1/PP1B1P1P/R3KB1R w"],
["r2qk2r/1p1n1pp1/2p1pnp1/p2p4/1bPP4/1QN1P1P1/PP1BBP1P/R3K2R b"],
["r2qk2r/1p1n1pp1/2p1pnp1/p7/1bpP4/1QN1P1P1/PP1BBP1P/R3K2R w"],
["r2qk2r/1p1n1pp1/2p1pnp1/p7/1bBP4/1QN1P1P1/PP1B1P1P/R3K2R b"],
["r3k2r/1p1n1pp1/1qp1pnp1/p7/1bBP4/1QN1P1P1/PP1B1P1P/R3K2R w"],
["r3k2r/1p1n1pp1/1qp1pnp1/p7/1bBP4/PQN1P1P1/1P1B1P1P/R3K2R b"],
["r3k2r/1p1n1pp1/1qp1pnp1/p7/2BP4/PQb1P1P1/1P1B1P1P/R3K2R w"],
["r3k2r/1p1n1pp1/1qp1pnp1/p7/2BP4/PQP1P1P1/3B1P1P/R3K2R b"],
["r3k2r/1p1n1pp1/2p1pnp1/p7/2BP4/PqP1P1P1/3B1P1P/R3K2R w"],
["r3k2r/1p1n1pp1/2p1pnp1/p7/3P4/PBP1P1P1/3B1P1P/R3K2R b"],
["r3k2r/1p1n1pp1/2p1p1p1/p7/3Pn3/PBP1P1P1/3B1P1P/R3K2R w"],
["r3k2r/1p1n1pp1/2p1p1p1/p7/3Pn3/P1P1P1P1/2BB1P1P/R3K2R b"],
["r3k2r/1p1n1pp1/2p1p1p1/p7/3P4/P1P1P1P1/2Bn1P1P/R3K2R w"],
["r3k2r/1p1n1pp1/2p1p1p1/p7/3P4/P1P1P1P1/2BK1P1P/R6R b"],
["r3k2r/1p1n1pp1/2p1p3/p5p1/3P4/P1P1P1P1/2BK1P1P/R6R w"],
["r3k2r/1p1n1pp1/2p1p3/p5p1/3P3P/P1P1P1P1/2BK1P2/R6R b"],
["r3k2r/1p1n1pp1/2p1p3/p7/3P3p/P1P1P1P1/2BK1P2/R6R w"],
["r3k2r/1p1n1pp1/2p1p3/p7/3P3P/P1P1P3/2BK1P2/R6R b"],
["r6r/1p1nkpp1/2p1p3/p7/3P3P/P1P1P3/2BK1P2/R6R w"],
["r6r/1p1nkpp1/2p1p3/p7/3P3P/P1P1P3/2BK1P2/1R5R b"],
["1r5r/1p1nkpp1/2p1p3/p7/3P3P/P1P1P3/2BK1P2/1R5R w"],
["1r5r/1p1nkpp1/2p1p3/p7/3PB2P/P1P1P3/3K1P2/1R5R b"],
["1r5r/1p2kpp1/2p1pn2/p7/3PB2P/P1P1P3/3K1P2/1R5R w"],
["1r5r/1p2kpp1/2p1pn2/p7/3P3P/P1P1PB2/3K1P2/1R5R b"],
["1r5r/1p2kp2/2p1pnp1/p7/3P3P/P1P1PB2/3K1P2/1R5R w"],
["1r5r/1p2kp2/2p1pnp1/p7/2PP3P/P3PB2/3K1P2/1R5R b"],
["1r5r/1p3p2/2pkpnp1/p7/2PP3P/P3PB2/3K1P2/1R5R w"],
["1r5r/1p3p2/2pkpnp1/p1P5/3P3P/P3PB2/3K1P2/1R5R b"],
["1r5r/1pk2p2/2p1pnp1/p1P5/3P3P/P3PB2/3K1P2/1R5R w"],
["1r5r/1pk2p2/2p1pnp1/p1P5/3P3P/P2KPB2/5P2/1R5R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/P2KPB2/5P2/1R5R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R w"],
["1r5r/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R b"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KPB2/5P2/7R w"],
["1r2r3/1pk2p2/2p2np1/p1P1p3/3P3P/PR1KP3/5PB1/7R b"]];
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
document.addEventListener('DOMContentLoaded', () => {
    initPieces(board);
    setImagesOnBoard();
    for (let i = 0; i < fen.length; i++) {
        setTimeout(function () {
            board = setBoardByFEN(fen[i]);
            initPieces(board);
            setImagesOnBoard();
            sleep(1000);
        }, 1000);
    }
}, false);