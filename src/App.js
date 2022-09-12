import { Question } from './features/question/Question';

function App() {
  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl  text-center'>
        Câu hỏi: Bạn hiểu thế nào về Redux (Actions, Reducers, Store)
        ?
      </h2>
      <Question />
    </div>
  );
}

export default App;
