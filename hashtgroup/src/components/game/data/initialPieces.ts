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
import ActiveGroup227 from "../../../assets/puzzle/enables/Group227";
import ActiveGroup226 from "../../../assets/puzzle/enables/Group226";
import ActiveGroup219 from "../../../assets/puzzle/enables/Group219";
import ActiveGroup240 from "../../../assets/puzzle/enables/Group240";
import ActiveGroup225 from "../../../assets/puzzle/enables/Group225";
import ActiveGroup220 from "../../../assets/puzzle/enables/Group220";
import ActiveGroup238 from "../../../assets/puzzle/enables/Group238";
import ActiveGroup224 from "../../../assets/puzzle/enables/Group224";
import ActiveGroup221 from "../../../assets/puzzle/enables/Group221";
import ActiveGroup239 from "../../../assets/puzzle/enables/Group239";
import ActiveGroup223 from "../../../assets/puzzle/enables/Group223";
import ActiveGroup222 from "../../../assets/puzzle/enables/Group222";

type PuzzlePiece = {
    id: number;
    name: string;
    Component: React.FC;
};

const Pieces: PuzzlePiece[] = [
    {id: 1, name: "Group227", Component: ActiveGroup227},
    {id: 2, name: "Group226", Component: ActiveGroup226},
    {id: 3, name: "Group219", Component: ActiveGroup219},
    {id: 4, name: "Group240", Component: ActiveGroup240},
    {id: 5, name: "Group225", Component: ActiveGroup225},
    {id: 6, name: "Group220", Component: ActiveGroup220},
    {id: 7, name: "Group238", Component: ActiveGroup238},
    {id: 8, name: "Group224", Component: ActiveGroup224},
    {id: 9, name: "Group221", Component: ActiveGroup221},
    {id: 10, name: "Group239", Component: ActiveGroup239},
    {id: 11, name: "Group223", Component: ActiveGroup223},
    {id: 12, name: "Group222", Component: ActiveGroup222},
];

export default Pieces