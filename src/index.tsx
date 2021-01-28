import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
//import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import CellList from './components/cell-list';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        {/*<CodeCell />
        <TextEditor />*/}
        <CellList />
      </div>
    </Provider>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));
