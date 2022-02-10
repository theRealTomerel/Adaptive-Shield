import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = lazy(() => import('./components/App/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
