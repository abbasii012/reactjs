Provider
import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'



function App() {
  

  return (
   <Provider store={store}>
   <h1 className='bg-red-600'>Todo Using Redux</h1>
   <AddTodo/>
   <Todos/>
   </Provider>
  )
}

export default App
