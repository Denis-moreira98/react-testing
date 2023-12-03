import { useState } from "react";
import Button from "./Button";
import axios from "axios";

interface TasksProps {
   id: string;
   title: string;
   complete: boolean;
   userId: string;
}

const Tasks = () => {
   const [tasks, setTasks] = useState<TasksProps[]>([]);
   const [errorMessage, setErrorMessage] = useState<null | string>(null);

   const handleClick = async () => {
      try {
         const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_limit-10"
         );
         setTasks(data);
         setErrorMessage(null);
      } catch (error: any) {
         setErrorMessage(error?.message);
      }
   };

   return (
      <>
         <h1>TASKS FROM API </h1>

         <Button disabled={false} onClick={handleClick}>
            Get Tasks from API
         </Button>
         {tasks?.length > 0 &&
            tasks.map((task) => (
               <div key={task.id}>
                  <strong>Task: </strong>
                  <p>{task.title}</p>
               </div>
            ))}

         {errorMessage}
      </>
   );
};

export default Tasks;
