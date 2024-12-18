import { Button, Container, Flex, Title } from "@mantine/core";
import React from "react";

import StatusManagement from "./pages/StatusManagement";

const App = () => (
  <Flex direction="column" h="100%">
    <Container size="lg" w="100%">
      <Flex py="md" justify="space-between">
        <Title c="blue" order={1}>
          Employees
        </Title>
        <Button variant="outline">Log out</Button>
      </Flex>
    </Container>
    <StatusManagement />
  </Flex>
);

export default App;
