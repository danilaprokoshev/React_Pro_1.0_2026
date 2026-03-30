import { Provider } from 'react-redux';
import { store } from './store';
import { TaskPage } from 'pages/tasks';

function App() {
  return (
    <Provider store={store}>
      <TaskPage />
    </Provider>
  );
}

export default App;
