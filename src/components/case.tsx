import {cases} from "../meta.json";

interface CaseProps {
  client: string;
  task: string;
  solution: string;
  result: string;
}

function Case({client, task, solution, result}: CaseProps) {
  return (
    <div className="w-full border border-gray-800 rounded-2xl p-10 flex flex-col gap-5">
      <p className="text-2xl">{client}</p>
      <div className="flex flex-col gap-2">
        <h1>Задача: <span className="text-xl">{task}</span></h1>
        <h1>Решение: <span className="text-xl">{solution}</span></h1>
      </div>
      <h1>Результат: <span className="text-2xl">{result}</span></h1>
    </div>
  )
}

export default function Cases() {
  return (
    <div className="border-t-2 border-dotted border-gray-800 py-20 flex flex-col gap-15">
      <h1 className="text-3xl md:text-5xl text-center">Наши кейсы</h1>
      <div className="container flex flex-col items-center gap-15">
        {cases.map(case_ => <Case {...case_} />)}
      </div>
    </div>
  )
}