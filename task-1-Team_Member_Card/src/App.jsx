
import './App.css'
import { TeamCard } from './components/TeamCard'

function App() {

  return (
    <>
      <TeamCard
        name = 'Rahul'
        role = 'Data Scientist'
        avatar = '/sample.jpg'
        isAvailable = {true}
      />
    </>
  )
}

export default App
