import initialPieces from "./data/initialPieces";
import {useCallback, useEffect, useState} from "react";
import InfoSubmission from "./InfoSubmission";
import Test from "./Test";
import replacementMap from "./data/puzzlePiecesReplacement";
import questions from "./data/questions";

type PuzzlePiece = {
    id: number;
    name: string;
    Component: React.FC;
};

type GameState = {
    pieces: PuzzlePiece[];
    selectedPiece: { id: number; name: string } | null;
    showTest: boolean;
    userAnswer: number | null;
    showInfoSubmission: boolean;
};

const Puzzle: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>({
        pieces: initialPieces,
        selectedPiece: null,
        showTest: false,
        userAnswer: null,
        showInfoSubmission: false
    });

    // to find the selected question
    const selectedQuestion = gameState.selectedPiece
        ? questions.find((q) => q.id === gameState.selectedPiece?.id)
        : null;

    const handlePieceClick = useCallback(({id, name}: { id: number; name: string }) => {
        // if a piece is enabled, you  can not choose another piece
        if (gameState.selectedPiece) return;

        setGameState((prev) => ({
            ...prev,
            selectedPiece: {id, name},
            showTest: true,
            pieces: prev.pieces.map((piece) =>
                piece.id === id ? {...piece, Component: replacementMap[name]} : piece
            ),
        }));
    }, [gameState.selectedPiece]);

    const handleAnswerSubmission = useCallback((answer: number) => {
        setGameState((prev) => ({
            ...prev,
            showTest: false,
            userAnswer: answer,
        }));

        setTimeout(() => {
            setGameState((prev) => ({
                ...prev,
                showInfoSubmission: true,
            }));
        }, 0);
    }, [gameState.userAnswer]);

    // to reset the puzzles
    const resetHandler = useCallback(() => {
        setGameState((prev) => ({
            ...prev,
            pieces: initialPieces,
            selectedPiece: null,
            showTest: false,
            userAnswer: null
        }));
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 grid-rows-4 mb-20 justify-self-center">
                {gameState.pieces.map(({id, name, Component}) => (
                    <div
                        key={id}
                        onClick={() => handlePieceClick({id, name})}
                        className="w-20 h-20 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 cursor-pointer flex justify-center items-center self-center justify-self-center"
                    >
                        <Component/>
                    </div>
                ))}
                {gameState.showTest && selectedQuestion && (
                    <Test
                        question={selectedQuestion.question}
                        options={selectedQuestion.options}
                        onClose={resetHandler}
                        onAnswerSubmit={handleAnswerSubmission}
                    />
                )}
                {gameState.userAnswer !== null && gameState.showInfoSubmission && selectedQuestion && (
                    <InfoSubmission
                        correctAnswer={selectedQuestion.answer}
                        selectedAnswer={gameState.userAnswer}
                        onReset={resetHandler}
                    />
                )}
            </div>
        </div>
    );
};

export default Puzzle;
