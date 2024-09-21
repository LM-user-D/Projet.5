import "../Des_Equip/desEquip.scss";
import Collapse from "../../Collapse/Collapse";

export default function Equipements({ tab = [] }) {
const titre = "Equipements";
const equip = tab.equipments;

return (
<>
    <div className="content-description">
        <Collapse
            titre={titre}
            content={equip.map((el, id) => (
                <li key={id}>{el}</li>
            ))}
        />
    </div>
</>
);
}
