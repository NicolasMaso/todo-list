import TodoInterface from "./TodoInterface";

export default interface PropsTodoInterface {
    todos: TodoInterface[];
    completeTodo: Function;
    removeTodo: Function;
    updateTodo: Function;
}
