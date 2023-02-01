// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import './index.css'
// import App from './App'

// import './api/server'

// import store from './store'
// import { fetchTodos } from './features/todos/todosSlice'

// store.dispatch(fetchTodos())

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

import store from './store'

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: '1'
// log: '2'
// log: '3'

// console.log('Dispatching action')
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// console.log('Dispatch complete')
// console.log('State after dispatch: ', store.getState())
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}