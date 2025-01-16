import { Button, Flex, Text, Title } from "@mantine/core";
import { FC } from "react";
import { FallbackProps } from "react-error-boundary";

export const Fallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <Flex
      direction="column"
      gap="lg"
      h="100vh"
      p="lg"
      align="center"
      justify="center"
      role="alert"
    >
      <Title role="2">Something went wrong😓</Title>
      <Text fw="bold" c="red">
        {error.message}
      </Text>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Flex>
  );
};
