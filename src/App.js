import './App.scss';
import Item from './components/item/item';
import Menu from './components/menu/menu';
import Formulario from './components/formulario/formulario';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, initAddTodo } from './reducers/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  
  const arr = [
    {
      'name':'Caminar al perro'
    },
    {
      'name':'Preparar la cena'
    }
  ]

  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item))
    })
  }, []);

  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
          <div className='scrolling'>
            {
              todos.map((todo, index) => {
                return (
                  <Item key={index} name={todo.name}></Item>
                )
              })
            }
          <Item></Item>
          <Item></Item>
          <Item></Item>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
