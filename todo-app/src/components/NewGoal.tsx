import { useRef, type FormEvent } from "react"

type Props = {
    onAdd: (goal: string, summary: string) => void; 
}

const NewGoal = ({onAdd}: Props) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const submittedGoal = goal.current!.value;
    const submittedSummary = summary.current!.value;

    onAdd(submittedGoal, submittedSummary);
    e.currentTarget.reset();
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <p>
            <label htmlFor="goal">Your goal</label>    
            <input id="goal" type="text" ref={goal} placeholder="Carpe Diem"/>
        </p>
        <p>
            <label htmlFor="goal">Summary</label>    
            <input id="summary" type="text" ref={summary} placeholder="Define your ambition"/>
        </p>
        <p>
            <button type="submit">Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal