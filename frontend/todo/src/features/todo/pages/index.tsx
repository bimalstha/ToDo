import { Container, Flex, Paper } from "@mantine/core";
import TodoNavbar from "../components/TodoNavbar";
import TodoCard from "../components/TodoCard";

const TodoPage = () => {
  return (
    <Container
      fluid
      className="h-[100vh]  flex items-center justify-center bg-slate-200"
    >
      <Paper className="px-7" miw={"300px"} shadow="xl">
        <Flex direction={"column"}>
          <TodoNavbar />
          <TodoCard title="bimal ko task" isDone={false} />
        </Flex>
      </Paper>
    </Container>
  );
};

export default TodoPage;
