import './app.sass';

import GradientCard from './components/GradientCard/GradientCard';
import Topbar from './components/Topbar/Topbar';
import FloatActionButton from './components/FloatActionButton/FloatActionButton';

import { GrMapLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";

function App() {
  return (
    <div id="app">
      <Topbar/>
      <div id='container'>
        <div id='box'>
          <div id='title'>
            <h1>Avilla</h1>
            <h3>Trazendo tecnologia para a sua vida!</h3>
          </div>
          <div id='options'>
            <GradientCard
              title='Mapa da Planta'
              icon={<GrMapLocation/>}
              gradient='green'
              onClick={() => {}}
            />
            <GradientCard
              title='Agenda Semanal'
              icon={<MdOutlineCalendarMonth/>}
              gradient='red'
              onClick={() => {}}
            />
            <GradientCard
              title='Cursos e Projetos'
              icon={<MdSchool/>}
              gradient='blue'
              onClick={() => {}}
            />
            <GradientCard
              title='Chat Inteligente'
              icon={<HiOutlineChatAlt2/>}
              gradient='purple'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <FloatActionButton
        backgraund='#960093'
        borderRadius={40}
        label='Tutorial'
        textColor='#FFF'
        shadowColor='#be27b9'
        onClick={() => {}}
      />
    </div>
  )
}

export default App;
