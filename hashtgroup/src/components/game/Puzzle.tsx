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

const Puzzle = () => {
    const pieces = [
        {id: 1, name: "Group227"},
        {id: 2, name: "Group226"},
        {id: 3, name: "Group219"},
        {id: 4, name: "Group240"},
        {id: 5, name: "Group225"},
        {id: 6, name: "Group220"},
        {id: 7, name: "Group238"},
        {id: 8, name: "Group224"},
        {id: 9, name: "Group221"},
        {id: 10, name: "Group239"},
        {id: 11, name: "Group223"},
        {id: 12, name: "Group222"},
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-4 p-4 w-2/3 h-1/2 justify-self-center">
            {pieces.map(({id, name}) => {
                // @ts-ignore
                const Component = components[name];
                return (
                    <div key={id}
                         className="flex justify-center items-center self-center justify-self-center w-min md:w-full sm:w-full">
                        <Component/>
                    </div>
                );
            })}
        </div>
    );
};

export default Puzzle;
