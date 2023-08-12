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

import { Button, Container, TextInput } from "@mantine/core";

const centeredContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const loginFormStyle = {
  maxWidth: "400px", /* Adjust the width as needed */
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "white",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
};

const LandingPage = () => {
  return (
    <div style={centeredContainerStyle}>
      <Container style={loginFormStyle}>
        <TextInput className="username" placeholder="username" label="Username" withAsterisk />
        <TextInput className="password" placeholder="password" label="Password" required />
        <Button variant="outline">Login</Button>
      </Container>
    </div>
  );
};

export default LandingPage;
