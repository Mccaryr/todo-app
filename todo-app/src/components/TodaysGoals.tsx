
type Goal = {
    title: string;
    description: string;
    id: number;
}

type Props = {
    goal: Goal 
    onDelete: (id: number) => void;
}

const TodaysGoals = ({goal, onDelete}: Props) => {

  return (
    <article>
        <div>
            <h2>{goal.title}</h2>
            <p>{goal.description}</p>
        </div>
        <button onClick={() => onDelete(goal.id)}>Delete</button>
    </article>
  )
}

export default TodaysGoals