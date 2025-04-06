const todoList=[{
  name : `make dinner`,dueDate:`2022-12-22`
},
{
  name : `wash dishes`,dueDate:`2022-12-22`
}
];

renderedTodoList();

function renderedTodoList(){
let todoListHtml='';

for(let i=0;i<todoList.length;i++)
{
  const todoObject=todoList[i];
  //const name=todoObject.name;
  //const dueDate=todoObject.dueDate;
  const { name,dueDate }=todoObject;
  const html=`
  <p>
  ${name} ${dueDate}
  <button onclick="
  todoList.splice(${i},1);
  renderedTodoList();
  ">
  Delete
  </button>
  </p>`;
  todoListHtml+=html;

}


document.querySelector('.js-todo-List').innerHTML=todoListHtml;
}
function addTodo()
{
  const inputElement=document.querySelector('.js-name-input');

  const name=inputElement.value;

const dateInputElement=document.querySelector('.js-due-date');
const dueDate=dateInputElement.value;



  todoList.push({
   // name:name,
  //dueDate:dueDate

  name,
  dueDate
});
 

  inputElement.value='';
  renderedTodoList();

}