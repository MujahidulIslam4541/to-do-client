import AllToDo from "../src/AllToDo";
import AddToDo from "../src/AddToDo";
function App() {

  return (
    <>
      <div className="h-screen w-[600px] mx-auto bg-gradient-to-r ">
        <h1 className="text-3xl font-bold text-center my-10">ToDo App</h1>
        <AddToDo></AddToDo>
        <AllToDo></AllToDo>
      </div>

    </>
  )
}

export default App
