import { Box, Checkbox, Space, Title } from "@mantine/core";
import { todoDataType } from "../data";
import React from "react";

const TodoCard: React.FC<Partial<todoDataType>> = ({ task, isDoneStatus }) => {
  return (
    <Box className="flex items-center">
      <Title>{task}</Title> <Space w={"xs"} />
      <Checkbox checked={isDoneStatus} />
    </Box>
  );
};

export default TodoCard;
