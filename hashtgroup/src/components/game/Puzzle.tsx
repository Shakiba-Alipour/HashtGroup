import Group227 from "../../assets/puzzle/disables/Group227";
import Group226 from "../../assets/puzzle/disables/Group226";
import Group219 from "../../assets/puzzle/disables/Group219";
import Group240 from "../../assets/puzzle/disables/Group240";
import Group225 from "../../assets/puzzle/disables/Group225";
import Group220 from "../../assets/puzzle/disables/Group220";
import Group238 from "../../assets/puzzle/disables/Group238";
import Group224 from "../../assets/puzzle/disables/Group224";
import Group221 from "../../assets/puzzle/disables/Group221";
import Group239 from "../../assets/puzzle/disables/Group239";
import Group223 from "../../assets/puzzle/disables/Group223";
import Group222 from "../../assets/puzzle/disables/Group222";

// New pieces to replace when clicked
import ActiveGroup227 from "../../assets/puzzle/enables/Group227";
import ActiveGroup226 from "../../assets/puzzle/enables/Group226";
import ActiveGroup219 from "../../assets/puzzle/enables/Group219";
import ActiveGroup240 from "../../assets/puzzle/enables/Group240";
import ActiveGroup225 from "../../assets/puzzle/enables/Group225";
import ActiveGroup220 from "../../assets/puzzle/enables/Group220";
import ActiveGroup238 from "../../assets/puzzle/enables/Group238";
import ActiveGroup224 from "../../assets/puzzle/enables/Group224";
import ActiveGroup221 from "../../assets/puzzle/enables/Group221";
import ActiveGroup239 from "../../assets/puzzle/enables/Group239";
import ActiveGroup223 from "../../assets/puzzle/enables/Group223";
import ActiveGroup222 from "../../assets/puzzle/enables/Group222";


import React, {useState} from "react";
import Test from "./Test";
import InfoSubmission from "./InfoSubmission";

// questions
const questions = [
    {
        id: 1,
        question: "سوال مربوط به پازل 1؟",
        options: ["گزینه ۱", "گزینه ۲", "گزینه ۳", "گزینه ۴"],
        answer: 1,
    },
    {
        id: 2,
        question: "سوال مربوط به پازل 2؟",
        options: ["گزینه ۱", "گزینه ۲", "گزینه ۳", "گزینه ۴"],
        answer: 2,
    },
    {
        id: 3,
        question: "سوال مربوط به پازل 3؟",
        options: ["گزینه ۱", "گزینه ۲", "گزینه ۳", "گزینه ۴"],
        answer: 3,
    },
];

// Object to map disabled pieces to active pieces
const replacementMap: Record<string, React.FC> = {
    Group227: ActiveGroup227,
    Group226: ActiveGroup226,
    Group219: ActiveGroup219,
    Group240: ActiveGroup240,
    Group225: ActiveGroup225,
    Group220: ActiveGroup220,
    Group238: ActiveGroup238,
    Group224: ActiveGroup224,
    Group221: ActiveGroup221,
    Group239: ActiveGroup239,
    Group223: ActiveGroup223,
    Group222: ActiveGroup222,
};

const components = {
    Group227,
    Group226,
    Group219,
    Group240,
    Group225,
    Group220,
    Group238,
    Group224,
    Group221,
    Group239,
    Group223,
    Group222,
};

const initialPieces = [
    {id: 1, name: "Group227", Component: Group227},
    {id: 2, name: "Group226", Component: Group226},
    {id: 3, name: "Group219", Component: Group219},
    {id: 4, name: "Group240", Component: Group240},
    {id: 5, name: "Group225", Component: Group225},
    {id: 6, name: "Group220", Component: Group220},
    {id: 7, name: "Group238", Component: Group238},
    {id: 8, name: "Group224", Component: Group224},
    {id: 9, name: "Group221", Component: Group221},
    {id: 10, name: "Group239", Component: Group239},
    {id: 11, name: "Group223", Component: Group223},
    {id: 12, name: "Group222", Component: Group222},
];


const Puzzle = () => {
    const [pieces, setPieces] = useState(initialPieces);
    const [selectedPiece, setSelectedPiece] = useState<{ id: number; name: string } | null>(null);
    const [showTest, setShowTest] = useState(false);
    const [showInfoSubmission, setShowInfoSubmission] = useState(false);
    const [userAnswer, setUserAnswer] = useState<number | null>(null);

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
