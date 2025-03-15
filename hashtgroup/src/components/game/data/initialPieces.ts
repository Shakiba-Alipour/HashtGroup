import Group227 from "../../../assets/puzzle/disables/Group227";
import Group226 from "../../../assets/puzzle/disables/Group226";
import Group219 from "../../../assets/puzzle/disables/Group219";
import Group240 from "../../../assets/puzzle/disables/Group240";
import Group225 from "../../../assets/puzzle/disables/Group225";
import Group220 from "../../../assets/puzzle/disables/Group220";
import Group238 from "../../../assets/puzzle/disables/Group238";
import Group224 from "../../../assets/puzzle/disables/Group224";
import Group221 from "../../../assets/puzzle/disables/Group221";
import Group239 from "../../../assets/puzzle/disables/Group239";
import Group223 from "../../../assets/puzzle/disables/Group223";
import Group222 from "../../../assets/puzzle/disables/Group222";

type PuzzlePiece = {
    id: number;
    name: string;
    Component: React.FC; // یا () => JSX.Element اگر کامپوننت‌ها فانکشنال هستند
};

const initialPieces: PuzzlePiece[] = [
    { id: 1, name: "Group227", Component: Group227 },
    { id: 2, name: "Group226", Component: Group226 },
    { id: 3, name: "Group219", Component: Group219 },
    { id: 4, name: "Group240", Component: Group240 },
    { id: 5, name: "Group225", Component: Group225 },
    { id: 6, name: "Group220", Component: Group220 },
    { id: 7, name: "Group238", Component: Group238 },
    { id: 8, name: "Group224", Component: Group224 },
    { id: 9, name: "Group221", Component: Group221 },
    { id: 10, name: "Group239", Component: Group239 },
    { id: 11, name: "Group223", Component: Group223 },
    { id: 12, name: "Group222", Component: Group222 },
];

export default initialPieces