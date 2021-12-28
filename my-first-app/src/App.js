import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title:" mario's", id:"001"},
    {title:" broser's", id:"002"},
    {title:" race's", id:"003"}
  ])

  // console.log(showEvents)
  // console.log(showModal)

  const handleClickBad = (id) => {
    setEvents(events.filter((event)=>{
      return event.id !== id
    }))
  }

  const handleClickGood = (id) => {
    // prevState[] => newState[]
    setEvents(
      (prevEvents)=> {
        console.log(prevEvents)
        return prevEvents.filter((event)=>{return event.id !== id})
      })
  }

  const handleShowModal = () => {
    setShowModal((prevShowModal)=>{
      console.log(prevShowModal)
      return !prevShowModal
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const sub = "All the latest events in Marioland" // test props

  return (
    <div className="App">
      {showModal && 
      (<Modal handleClose={handleClose} isSalesModal={true}>
        <h2>10% Coupon Here!!</h2>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal>)}

      <Title title="events in your area" subtitle={sub}/>

      <div>
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>hide events</button>)}
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>show events</button>)}
      </div>

      {showEvents &&
       <EventList events={events} handleClickBad={handleClickBad} handleClickGood={handleClickGood}/>}

      <button onClick={()=>handleShowModal()}>Show Model</button>
    </div>
  );
}

// always export components to be rendered!
export default App;
