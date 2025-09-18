import adatok_brit from '../../public/js/adatok_brit';
import Brit from './Brit';

const Brits = () => {
   let britItems = [];
    for (let i = 0; i < adatok_brit.length; i++) {
        britItems.push(<Brit key={i} brit={adatok_brit[i]} />);
    }
    return (
        <div>
            <div className="main-kontener">{britItems}</div>;
        </div>
    );
}

export default Brits