import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './router/appRouter'

function App() {
  console.log('APP')
  return (
    <Provider store={store}>
      <div className="app">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
