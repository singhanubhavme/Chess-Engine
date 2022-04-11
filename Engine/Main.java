import java.util.*;

class Board {
    private String board[][];
    private String whoseMove;

    Board() {
        this.board = new String[][] {
                { "r", "n", "b", "q", "k", "b", "n", "r" },
                { "p", "p", "p", "p", "p", "p", "p", "p" },
                { "e", "e", "e", "e", "e", "e", "e", "e" },
                { "e", "e", "e", "e", "e", "e", "e", "e" },
                { "e", "e", "e", "e", "e", "e", "e", "e" },
                { "e", "e", "e", "e", "e", "e", "e", "e" },
                { "P", "P", "P", "P", "P", "P", "P", "P" },
                { "R", "N", "B", "Q", "K", "B", "N", "R" }
        };
        this.whoseMove = "b";
    }

    public void setBoard() {
        this.board = new String[][] {
                { "r", "e", "b", "q", "e", "e", "e", "r" },
                { "p", "e", "p", "e", "k", "p", "p", "p" },
                { "e", "e", "p", "e", "e", "n", "e", "e" },
                { "e", "e", "b", "e", "e", "e", "e", "e" },
                { "e", "e", "B", "e", "P", "e", "e", "e" },
                { "e", "Q", "N", "e", "e", "N", "e", "e" },
                { "P", "P", "e", "K", "e", "P", "P", "P" },
                { "R", "e", "B", "e", "e", "e", "e", "R" }
        };
    }

    public String getFEN(String[][] board) {
        String FEN = "";
        int numberOfEmpty = 0;
        try {
            for (int i = 0; i < board.length; i++) {
                for (int j = 0; j < board[i].length; j++) {
                    if (board[i][j].equals("e")) {
                        numberOfEmpty++;
                    } else {
                        if (numberOfEmpty != 0) {
                            FEN += Integer.toString(numberOfEmpty);
                        }
                        numberOfEmpty = 0;
                        FEN += board[i][j];
                    }
                }
                if (numberOfEmpty != 0) {
                    FEN += Integer.toString(numberOfEmpty);
                }
                numberOfEmpty = 0;
                if (i != board.length - 1)
                    FEN += "/";
            }
            whoseMove = whoseMove.equals("w") ? "b" : "w";
            FEN += " " + whoseMove;
        } catch (Exception e) {
            System.out.println("Invalid Board Position");
        }
        return FEN;
    }

    public String getFEN() {
        String FEN = "";
        int numberOfEmpty = 0;
        try {
            for (int i = 0; i < this.board.length; i++) {
                for (int j = 0; j < this.board[i].length; j++) {
                    if (this.board[i][j].equals("e")) {
                        numberOfEmpty++;
                    } else {
                        if (numberOfEmpty != 0) {
                            FEN += Integer.toString(numberOfEmpty);
                        }
                        numberOfEmpty = 0;
                        FEN += board[i][j];
                    }
                }
                if (numberOfEmpty != 0) {
                    FEN += Integer.toString(numberOfEmpty);
                }
                numberOfEmpty = 0;
                if (i != this.board.length - 1)
                    FEN += "/";
            }
            FEN += " " + whoseMove;
        } catch (Exception e) {
            System.out.println("Invalid Board Position");
        }
        return FEN;
    }

    public String[][] setBoardByFEN(String FEN) {
        // System.out.println("here");
        try {
            FEN = FEN.substring(0, FEN.indexOf(" ")); // to remove (w and b from FEN)
            String board[][] = new String[8][8];
            StringTokenizer FENTokens = new StringTokenizer(FEN, "/");
            int x = 0, y = 0;
            while (FENTokens.hasMoreTokens()) {
                String temp = FENTokens.nextToken();
                for (int j = 0; j < temp.length(); j++) {
                    if (Character.isDigit(temp.charAt(j))) {
                        int numberOfEmpty = Integer.parseInt(String.valueOf(temp.charAt(j)));
                        while (numberOfEmpty != 0) { // set e for every number in FEN
                            board[x][y++] = "e";
                            numberOfEmpty--;
                        }
                    } else {
                        board[x][y++] = Character.toString(temp.charAt(j));
                    }
                }
                y = 0; // y will be 0 for every row
                x++; // next row
            }
            return board;
        } catch (Exception e) {
            System.out.println("Invalid FEN");
            return board;
        }
    }

    public String[][] setBoardByMove(String FEN, String move) {
        return new String[][] {};
    }
}

class Main {
    public static void main(String args[]) {
        // Board b1 = new Board();
        // b1.setBoard();
        // System.out.println();
        // System.out.println(b1.getFEN());

        // String board[][] = b1.setBoardByFEN(b1.getFEN());
        // System.out.println();
        // for (int i = 0; i < board.length; i++) {
        //     for (int j = 0; j < board[i].length; j++) {
        //         System.out.print(board[i][j] + " ");
        //     }
        //     System.out.println();
        // }
        // Stockfish stockfish = new Stockfish();
        // stockfish.startEngine();
        // String bestMove = stockfish.getBestMove(b1.getFEN(), 100);
        // System.out.println(bestMove);
        // stockfish.stopEngine();
    }
}
