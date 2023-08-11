import { Button, Container, TextInput } from "@mantine/core";

const LandingPage = () => {
  return (
    <Container>
      <TextInput placeholder="Your name" label="Full name" />
      <TextInput></TextInput>
      <Button variant="outline">Login</Button>
    </Container>
  );
};

export default LandingPage;
