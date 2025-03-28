// New pieces to replace when clicked
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

// Object to map disabled pieces to active pieces
const Pieces: Record<string, React.FC> = {
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

export default Pieces