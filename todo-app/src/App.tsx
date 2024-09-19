import './App.css'
import Header from './components/Header'
import goalsImg from './assets/godzilla.jfif'
import { useState } from 'react'
import GoalList from './components/GoalList'
import NewGoal from './components/NewGoal'


type Goal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description: summary 
      }
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
}

  return (
    <main style={{width:'100vw'}}>
      <Header image={{src: goalsImg, alt: 'godzilla'}}>
        <h1>Todays Goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal}/>
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  )
}

export default App
