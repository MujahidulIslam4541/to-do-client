import AllToDo from "../src/AllToDo";
function App() {

  return (
    <>
      <div className="h-screen max-w-xl mx-auto bg-gradient-to-r ">
        <h1 className="text-3xl font-bold ">ToDo App</h1>
        <div className="flex gap-5">
          <input type="text" className="w-40 " placeholder="Enter Your task" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add</button>
        </div>

        <div>
          <div>
            <h2>All task list</h2>
            <p>1/4</p>
          </div>

          <AllToDo></AllToDo>
        </div>
      </div>
    </>
  )
}

export default App
