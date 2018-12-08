import Validation from '../../services/validation';

const saveInput = (action, e) => {
  const field = e.target.name;
  const value = e.target.value;

  // prepare the data
  const data = `${action}Data`;
  const input = window.app.store[data] || {};

  //update input field
  input[field] = value;

  // store the data in the window
  window.app.store[data] = input;
  
  // validate the input and save 
  Validation.validate(action, input, field);

}

export default saveInput;