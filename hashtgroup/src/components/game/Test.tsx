import React, {useRef, useState} from "react";
import InfoSubmission from "./InfoSubmission";

interface TestProps {
    question: string,
    optionOne: string,
    optionTwo: string,
    optionThree: string,
    optionFour: string,
    answer: number
}

const Test: React.FC<TestProps> = ({question, optionOne, optionTwo, optionThree, optionFour, answer}) => {
    // a reference to the selected answer
    let selectedAnswer = useRef<HTMLSelectElement>(null)

    // to handle getting the user's data
    const handleSubmission = () => {
        return <InfoSubmission correctAnswer={answer} selectedAnswer={selectedAnswer.current?.value}/>
    }


    return <div
        className="flex flex-col justify-items-center self-center justify-self-center flex-wrap content-center w-5/6 bg-Light-Surface bg-opacity-20 border-Secondary-Text rounded-xl p-4 gap-y-4 z-30">
        <p className="text-Secondary-Text w-11/12 text-right">سوال این صندوق</p>
        <div className="bg-Light-Surface w-11/12 rounded-md text-right pr-8 pl-8 pt-2 pb-2">
            <p className="pb-4 flex flex-col">{question}</p>
            <p>الف) {optionOne}</p>
            <p>ب) {optionTwo}</p>
            <p>ج) {optionThree}</p>
            <p>د) {optionFour}</p>
        </div>

        <select className="w-11/12 rounded-md p-1" name="پاسخ را انتخاب کنید" ref={selectedAnswer}>
            <option value={1}>{optionOne}</option>
            <option value={2}>{optionTwo}</option>
            <option value={3}>{optionThree}</option>
            <option value={4}>{optionFour}</option>
        </select>

        <button className="w-11/12 bg-PrizeButton rounded-md pt-1 pb-1 text-Secondary-Text"
                onClick={handleSubmission}>دریافت جایزه
        </button>
    </div>
}

export default Test