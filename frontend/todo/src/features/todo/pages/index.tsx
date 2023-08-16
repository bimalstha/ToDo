import { Container, Flex, Paper } from "@mantine/core";
import TodoNavbar from "../components/TodoNavbar";
import TodoCard from "../components/TodoCard";
import React from "react";
import { gettodoApi } from "../api/todoApi";
import { todoDataType } from "../data";
import TodoForm from "../components/TodoForm";

const TodoPage = () => {
  const [listofTodos, setListOfTodos] = React.useState<
    undefined | Array<todoDataType>
  >();

  const listTodoFunction = async () => {
    try {
      const res = await gettodoApi();
      console.log("console", res.data);
      if (res.status == 200) {
        setListOfTodos(res.data);
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    listTodoFunction();
  }, []);

  return (
    <Container
      fluid
      className="h-[100vh]  flex items-center justify-center bg-slate-200"
    >
      <Paper className="px-7" miw={"300px"} shadow="xl">
        <Flex direction={"column"}>
          <TodoNavbar />
          {listofTodos?.map((todo) => {
            return (
              <TodoCard
                task={todo.task}
                isDoneStatus={todo.isDoneStatus}
                key={todo.taskId}
              />
            );
          })}
          {/* <TodoCard title="bimal ko task" isDone={false} /> */}
        </Flex>
      </Paper>
      <TodoForm />
    </Container>
  );
};

export default TodoPage;
