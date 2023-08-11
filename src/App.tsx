import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './router/appRouter'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
