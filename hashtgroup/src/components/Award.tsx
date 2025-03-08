import React from "react";

interface AwardProps {
    prize:any,
    points:number
}

const Award: React.FC<AwardProps> = ({ prize, points }) => {
  return <div className="flex flex-col mt-12 mb-12">
      {prize}
      <div className="text-Secondary-Text bg-Secondary-Background rounded-2xl mt-4">
          {points}
      </div>
  </div>
}

export default Award