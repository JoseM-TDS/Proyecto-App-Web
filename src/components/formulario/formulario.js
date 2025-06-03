import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './formulario.scss'
import { useRef } from 'react';
import { addTodo } from '../../reducers/todoSlice';
import { addGoal } from '../../reducers/goalSlice';

function FormTasksOrGoals(){
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDate = useRef();
  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();
}

const addItem = (e) => {
  e.preventDefault();
  
  if(inputRefName.current.value && inputRefDescription.current.value && inputRefDate.current.value){
    if(option === 'Tasks'){
      dispatch(addTodo({ 'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'date': inputRefDate.current.value}))
    }else {
      dispatch(addGoal({ 'name': inputRefName.current.value, 'description': inputRefDescription.current.value, 'date': inputRefDate.current.value}))
    }
  }
}

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>{option}</Form.Label>
        <Form.Control type="Title" placeholder="Title" />
        <Form.Text className="text-muted">
          Lista de {option}!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>{inputRefName.current.value}</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>{inputRefDescription.current.value}</Form.Label>
        <Form.Control type="description" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>{inputRefDate.current.value}</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>

      <Button class="btn btn-primary" type="button">Button</Button>
    </Form>
  );
}

export default Formulario;