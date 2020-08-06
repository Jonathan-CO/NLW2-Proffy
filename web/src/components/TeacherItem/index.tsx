import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/31313701?s=460&u=d200a661c6040ce7aae579d96e651d114af8cdff&v=4" 
            alt="Jonathan da Cunha Oliveira"/>
            <div>
              <strong>Jonathan da Cunha Oliveira</strong>
              <span>Node, ReactJS, React Native</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias relacionadas à tecnologia da informação
            <br/> <br/>
            Bacharel em Sistemas de Informação, com preferência às áreas de programação, desenvolvimento, otimização e IA.
          </p>


          <footer>
            <p>
              Preço/hora
              <strong>R$125,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;