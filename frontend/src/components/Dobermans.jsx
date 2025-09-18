import Doberman from './Doberman';
import adatok_doberman from '../../public/js/adatok_doberman';

const Dobermans = () => {
  let dobermanItems = [];
    for (let i = 0; i < adatok_doberman.length; i++) {
        dobermanItems.push(<Doberman key={i} dobi={adatok_doberman[i]} />);
    }
    return (
        <div>
            <div className="main-kontener">{dobermanItems}</div>;
        </div>
    );
}

export default Dobermans;