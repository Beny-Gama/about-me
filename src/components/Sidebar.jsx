import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id='sidebar'>
            <img src={Avatar} alt="Beny Gama" />
            <p className='title'>Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informatções de contato</p>
            <a href="" className='btn'>
                Download Currículo
            </a>
        </aside>
    );
};

export default Sidebar;