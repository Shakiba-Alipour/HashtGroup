import React, {useRef, useState} from "react";
import Test from "./Test";
import InfoSubmission from "./InfoSubmission";


const Puzzle = () => {
    const [pieces, setPieces] = useState(initialPieces);
    const [selectedPiece, setSelectedPiece] = useState<{ id: number; name: string } | null>(null);
    const [showTest, setShowTest] = useState(false);
    const [showInfoSubmission, setShowInfoSubmission] = useState(false);
    const [userAnswer, setUserAnswer] = useState<number | null>(null);
    const testRef = useRef<HTMLDivElement | null>(null);

    // to find the selected question
    const selectedQuestion = selectedPiece
        ? questions.find((q) => q.id === selectedPiece.id)
        : null;

    const handlePieceClick = ({id, name}: { id: number, name: string }) => {
        // if a piece is enabled, you  can not choose another piece
        if (selectedPiece) return;

        setSelectedPiece({id, name});
        setShowTest(true)

        // @ts-ignore
        setPieces((prevPieces) =>
            prevPieces.map((piece) =>
                piece.id === id
                    ? {
                        ...piece,
                        Component: replacementMap[name],
                    }
                    : piece
            )
        );
    };

    const handleAnswerSubmission = (answer: number) => {
        setSelectedPiece(null);
        setPieces(initialPieces);
        setShowTest(false);
        setUserAnswer(answer);
        setShowInfoSubmission(true);
    };

    // If the test is displayed and user click outside the test box, the test will be disappeared
    // and the user can choose another puzzle piece
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (testRef.current && !testRef.current.contains(event.target as Node)) {
                setShowTest(false);
                setSelectedPiece(null);
                setPieces(initialPieces);
            }
        };

        if (showTest) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showTest]);

    return (
        <div className="grid grid-cols-3 grid-rows-4 mb-20 w-2/3 h-1/2 justify-self-center">
            {pieces.map(({id, name, Component}) => {
                return (
                    <div key={id}
                         onClick={() => handlePieceClick({id, name})}
                         className="w-20 h-20 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-60 lg:h-60 cursor-pointer flex justify-center items-center self-center justify-self-center">
                        <Component/>
                    </div>
                );
            })}
            {showTest && selectedQuestion &&
                <Test question={selectedQuestion.question}
                      optionOne={selectedQuestion.options[0]}
                      optionTwo={selectedQuestion.options[1]}
                      optionThree={selectedQuestion.options[2]}
                      optionFour={selectedQuestion.options[3]}
                      onClose={()=>{}}
                      onAnswerSubmit={(answer) => handleAnswerSubmission(answer)}/>}

            {showInfoSubmission && selectedQuestion && userAnswer &&
                <InfoSubmission correctAnswer={selectedQuestion?.answer} selectedAnswer={userAnswer}/>}
        </div>
    );
};

export default Puzzle;
