import { Box, Checkbox, Space, Title } from "@mantine/core";
import { todoDataType } from "../data";
import React from "react";

const TodoCard: React.FC<todoDataType> = ({ title, isDone }) => {
  return (
    <Box className="flex items-center">
      <Title>{title}</Title> <Space w={"xs"}/>
      <Checkbox checked={isDone} />
    </Box>
  );
};

export default TodoCard;
