
class Move {
    boolean isLegalMove(String FEN, String move) {
        // checks, captures, illegals etc
        // check if move is legal
        // not checking here coz, here moves are made by engine
        return true;
    }

    // get piece on d2 if move is d2b4
    String getPieceFrom(String[][] board, String from) {
        int xAxis = from.charAt(1) - '0'; // char to int
        int yAxis = (from.charAt(0) - 'a') + 1; // char to a+(int)
        xAxis--;
        yAxis--;
        int currentIndexX = 8 - xAxis - 1;
        int currentIndexY = yAxis;
        return board[currentIndexX][currentIndexY];
    }

    // get index of move(where piece is moving) if move is d2b4, return index of b4
    int[] getIndexToMove(String move) {
        int xAxis = move.charAt(3) - '0'; // char to int
        int yAxis = (move.charAt(2) - 'a') + 1; // char to a+(int)
        xAxis--;
        yAxis--;
        int currentIndexX = 8 - xAxis - 1;
        int currentIndexY = yAxis;
        return new int[] { currentIndexX, currentIndexY };
    }

    // get index of move(where piece is before moving) if move is d2b4, return index
    // of d2
    int[] getIndexBeforeMove(String move) {
        int xAxis = move.charAt(1) - '0'; // char to int
        int yAxis = (move.charAt(0) - 'a') + 1; // char to a+(int)
        xAxis--;
        yAxis--;
        int currentIndexX = 8 - xAxis - 1;
        int currentIndexY = yAxis;
        return new int[] { currentIndexX, currentIndexY };
    }

    // make move and return fen after moving
    String makeMove(String FEN, String move) {
        if (isLegalMove(FEN, move)) {
            Board b = new Board();
            String board[][] = b.setBoardByFEN(FEN);
            String pieceToMove = getPieceFrom(board, move);
            int[] currentIndex = getIndexBeforeMove(move);
            int[] indexToMove = getIndexToMove(move);
            board[indexToMove[0]][indexToMove[1]] = pieceToMove;
            board[currentIndex[0]][currentIndex[1]] = "e";
            String previousMoveColor = String.valueOf(FEN.charAt(FEN.length() - 1));
            // System.out.println(FEN);
            String newMoveColor = new String("w");
            if (previousMoveColor.equals("w")) {
                newMoveColor = new String("b");
            }else{
                newMoveColor = new String("w");
            }
            // System.out.println(previousMoveColor+" "+newMoveColor);
            String newFEN = b.getFEN(board);
            newFEN = newFEN.substring(0, newFEN.length() - 1);
            return newFEN.concat(newMoveColor);
            // return newFEN;
        } else {
            System.out.println("Illegal Move");
            return "";
        }
    }

    public static void main(String args[]) {
        // Move obj = new Move();
        // System.out.println(obj.makeMove("r1bq3r/p1p1kppp/2p2n2/2b5/2B1P3/1QN2N2/PP1K1PPP/R1B4R
        // b", "f3e5"));
        // Stockfish stockfish = new Stockfish();
        // stockfish.startEngine();
        // String bestMove =
        // stockfish.getBestMove("r1bqkb1r/pppp1Npp/2n5/4p3/2B1n3/8/PPPP1PPP/RNBQK2R b",
        // 1000);
        // System.out.println(bestMove);
        // stockfish.stopEngine();
    }
}
