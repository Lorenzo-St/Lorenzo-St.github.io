import '../styles/components/nav.css'

function Navbutton({ text, action }) {
  return <button className="Navbutton" onClick={action}> {text} </button>;
}

export default Navbutton;
