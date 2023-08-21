import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './router/appRouter'
import { ConfigProvider } from 'antd'
import locale from 'antd/es/locale/zh_CN'
function App() {
  console.log('APP')
  return (
    <ConfigProvider locale={locale}>
      <Provider store={store}>
        <div className="app">
          <AppRouter />
        </div>
      </Provider>
    </ConfigProvider>
  )
}

export default App
