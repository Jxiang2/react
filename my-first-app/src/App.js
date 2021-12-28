import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {

  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  // console.log(showEvents)
  // console.log(showModal)

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
      return !prevShowModal
    })
  }

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal((prevShowModal)=>{return !prevShowModal})
  }

  const sub = "All the latest events in Marioland" // test props

  return (
    <div className="App">
      <Title title="events in your area" subtitle={sub}/>

      <div>
      {showEvents && (
        <button onClick={(e) => setShowEvents(false)}>hide events</button>)}
      {!showEvents && (
        <button onClick={(e) => setShowEvents(true)}>show events</button>)}
      </div>

      {showEvents &&
       <EventList events={events} handleClickGood={handleClickGood}/>}

      {showModal && 
      (<Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>)} 

      <button onClick={(e)=>handleShowModal()}>Add New Events</button>
    </div>
  );
}

// always export components to be rendered!
export default App;
