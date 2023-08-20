// import { Button, Container, TextInput } from "@mantine/core";

// const LandingPage = () => {
//   return (
//     <Container>
//       <TextInput className="username" placeholder="username" label="Username" withAsterisk/>
//       <TextInput className="password" placeholder="password" label="Password" required/>
//       <Button variant="outline">Login</Button>
//     </Container>
//   );
// };

// export default LandingPage;

import { Button, TextInput } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { loginApi } from "../api";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
// import { Cookies } from "react-cookie";

export type loginDataType = { username: string; password: string };

const LandingPage = () => {
  // const cookie = new Cookies();
  const navigate = useNavigate();
  const form = useForm<loginDataType>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: {
      username: (val) => {
        if (val.length <= 3) {
          return "Invalid user name";
        }
        return null;
      },
    },
  });

  const login = async (loginData: loginDataType) => {
    try {
      const res = await loginApi(loginData);
      if (res.status == 200) {
        notifications.clean();
        notifications.show({
          title: "Login Successful",
          message: "Welcome 🤥",
        });
        // setCookie(cookies["jwt"], res.data["token"]);
        // cookie.set("jwt", res.data["token"], { httpOnly: true });
        navigate("/gettask");
      }
    } catch (error) {
      notifications.show({
        title: "Login failed",
        message: "invalid credentials",
      });
    }
  };

  return (
    <div>
      <Form
        form={form}
        onSubmit={(data) => {
          login(data);
        }}
      >
        <TextInput
          placeholder="username"
          label="Username"
          withAsterisk
          {...form.getInputProps("username")}
        />
        <TextInput
          placeholder="password"
          label="Password"
          required
          {...form.getInputProps("password")}
        />
        <br />
        <Button type="submit" variant="outline">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LandingPage;
