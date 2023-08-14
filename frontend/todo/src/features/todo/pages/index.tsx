import { Container, Flex, Paper } from "@mantine/core";
import TodoNavbar from "../components/TodoNavbar";
import TodoCard from "../components/TodoCard";
import React from "react";
import { todoApi } from "../api/todoApi";
import { todoDataType } from "../data";

const TodoPage = () => {
  const [listofTodos, setListOfTodos] = React.useState<
    undefined | Array<todoDataType>
  >();

  const asyncFunc = async () => {
    try {
      const res = await todoApi();
      if (res.status == 200) {
        setListOfTodos(res.data);
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    asyncFunc();
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
                isDone={todo.isDone}
                key={todo.taskId}
              />
            );
          })}
          {/* <TodoCard title="bimal ko task" isDone={false} /> */}
        </Flex>
      </Paper>
    </Container>
  );
};

export default TodoPage;
