import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import App from './App.jsx'
import ErrorBoundary from './components/Error/Error.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);




