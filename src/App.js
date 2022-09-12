import { Question } from './features/question/Question';

function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl'>
        Báo cáo công việc ngày 12/09
      </h1>
      <h2 className='text-center text-xl'>Huỳnh Anh Bảo</h2>
      <h2 className='text-2xl text-center'>
        Tạo project dạng tabs viết bằng react,redux toolkit trả lời
        các câu hỏi về actions,reducer,stores
      </h2>

      <h2 className='text-3xl  text-center'>
        Câu hỏi: Bạn hiểu thế nào về Redux (Actions, Reducers, Store)
        ?
      </h2>
      <Question />
    </div>
  );
}

export default App;
