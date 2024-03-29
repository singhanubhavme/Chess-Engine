import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.ArrayList;
import java.io.*;
class EngineVsEngine {
    public static void main(String args[]) throws IOException {
        Stockfish stockfish = new Stockfish();
        Board b1 = new Board();
        int moves = 0;
        Move move = new Move();
        String FEN = b1.getFEN();
        ArrayList<String> FENs = new ArrayList<>();
        while (moves <= 100) {
            try {
                stockfish.startEngine();
                String bestMove = stockfish.getBestMove(FEN, 1000);
                String newFEN = move.makeMove(FEN, bestMove);
                // System.out.println(newFEN + " " + moves);
                FENs.add(newFEN);
                FEN = new String(b1.getFEN(b1.setBoardByFEN(newFEN)));
                moves++;
                stockfish.stopEngine();
            } catch (Exception e) {
                throw e;
            }
        }
        // show board from FEN ArrayList
        BufferedWriter bw = new BufferedWriter(new FileWriter("moves.txt"));
        for (int i = 0; i < FENs.size(); i++) {
            // System.out.println(FENs.get(i));
            bw.write(FENs.get(i)+"\n");
        }
        bw.close();
        
    }
}
