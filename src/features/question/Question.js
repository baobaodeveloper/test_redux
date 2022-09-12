import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { questionAction } from './questionSlice';

const all = [
  { key: 'actions', value: 'Actions' },
  { key: 'reducer', value: 'Reducer' },
  { key: 'store', value: 'Store' },
];

export const Question = () => {
  const dispatch = useDispatch();
  const { answer } = useSelector((state) => state.questionReducer);
  const [active, setActive] = useState(true);

  const handleClick = (e) => {
    dispatch(questionAction.question(e.target.textContent));
    setActive(e.target.textContent);
  };

  return (
    <div>
      <div className='flex justify-center space-x-4 font-semibold text-2xl border-b-2 pb-2 mt-3'>
        {all.map(({ key, value }) => (
          <span
            key={key}
            className={`cursor-pointer transition-all duration-200 p-2  ${
              active === value ? '  text-white bg-blue-400 ' : ''
            }`}
            onClick={(e) => handleClick(e)}
          >
            {value}
          </span>
        ))}
      </div>
      <div className='text-center mt-5'>
        <p className='text-2xl'>{answer}</p>
      </div>
    </div>
  );
};
