import './styles.css';
import { perfil, sacola } from '../../assets/image';

function Icons() {
    const icons = [perfil, sacola];

    return (
        <div className="icons">
            {icons.map((icon, index) => {
                return <img key={index} className="icon" src={icon} />;
            })}
        </div>
    );
}

export default Icons;
