import TodaysGoals from "./TodaysGoals";

type Props = {
    goals: {
        title: string;
        description: string;
        id: number; 
    } []
    onDelete: (id: number) => void;
}
const GoalList = ({goals, onDelete}: Props) => {
  return (
    <div>
        <ul>
        {goals.map((goal, key) => (
          <li key={key}>
            <TodaysGoals goal={goal} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoalList