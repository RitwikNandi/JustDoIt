const Form = () => {
  return (
    <div>
      <div className='header'>
        <h2>Just Do It!!!</h2>
        <div className='input-container'>
          <input type='text' name='task' id='task' placeholder='add a task' />
          <input
            type='number'
            name='deadline'
            id='deadline'
            placeholder='deadline in days'
          />
        </div>
        <button className='addBtn'>Add</button>
      </div>
    </div>
  );
};

export default Form;
