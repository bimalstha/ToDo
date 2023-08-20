import { TextInput, Checkbox, Button } from "@mantine/core";
import { useForm, Form } from "@mantine/form";
import { addTaskDataTye } from "../data";
import { addTaskApi } from "../api/todoApi";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const navigate = useNavigate();
  const form = useForm<addTaskDataTye>({
    initialValues: {
      task: "",
      isDoneStatus: false,
    },
    validate: {
      task: (val) => {
        if (val.length < 3) {
          return "too short Task";
        }
        return;
      },
    },
  });

  const addTaskResponse = async (data: addTaskDataTye) => {
    try {
      const res = await addTaskApi(data);
      if (res.status == 200) {
        notifications.show({
          title: "Success",
          message: "new task added",
        });
        navigate("/gettask");
      } else {
        notifications.show({
          title: "Failed",
          message: "add task failed",
        });
      }
    } catch (error) {}
  };
  return (
    <div>
      <Form
        form={form}
        onSubmit={(data) => {
          addTaskResponse(data);
        }}
      >
        <TextInput
          placeholder="add your task"
          label="task"
          required
          {...form.getInputProps("task")}
        />
        <Checkbox
          checked={false}
          {...form.getInputProps("isDoneStatus", { type: "checkbox" })}
        />
        <Button type="submit" variant="default">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
