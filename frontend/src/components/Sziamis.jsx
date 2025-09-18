import adatok_sziami from "../../public/js/adatok_sziami";
import Sziami from "./Sziami";

const Sziamis = () => {
  let sziamiItems = [];
    for (let i = 0; i < adatok_sziami.length; i++) {
        sziamiItems.push(<Sziami key={i} sziami={adatok_sziami[i]} />);
    }
    return (
        <div>
            <div className="main-kontener">{sziamiItems}</div>;
        </div>
    );
}

export default Sziamis;