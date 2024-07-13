import { createPortal } from 'deco/h/preact/compat';
import MyModal from './MyModal';

function App() {
  const container = document.getElementById('modals');
  return (
    <div>
      Eu sou um app
      {createPortal(<MyModal />, container)}
    </div>
  )
}