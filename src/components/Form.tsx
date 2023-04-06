import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../context";
import { ITodo, TodoContextType } from "../@types/todo";

const Form: React.FC = () => {
  const { saveTodo } = useContext(AppContext) as TodoContextType;

  const [formData, setFormData] = useState<ITodo | {}>();

  const handleInput = (e: FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.id, e.currentTarget.value);

    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form className='Form' onSubmit={(e) => handleSubmit(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Title</label>
          <input onChange={handleInput} type='text' id='title' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleInput} type='text' id='description' />
        </div>
      </div>
      <button type='submit' disabled={formData === undefined ? true : false}>
        Add Todo
      </button>
    </form>
  );
};

export default Form;
