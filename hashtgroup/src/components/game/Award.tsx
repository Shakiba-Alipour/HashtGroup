import React from "react";

interface AwardProps {
    prize:any,
    points:number
}

const Award: React.FC<AwardProps> = ({ prize, points }) => {
  return <div className="flex flex-col mt-12 mb-12 items-center">
      {prize}
      <div className="text-white bg-Secondary-Text w-1/3 rounded-2xl mt-4 bg-opacity-20">
          {points}
      </div>
  </div>
}

export default Award