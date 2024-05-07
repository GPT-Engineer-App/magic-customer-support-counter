import { Container, Text, VStack, Image, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const targetDate = new Date("February 1, 2024");
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now - targetDate;
      setDaysSince(Math.floor(difference / (1000 * 60 * 60 * 24)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src="/logo.png" alt="E-commerce Customer Support Logo" boxSize="150px" mb={8} />
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">Days Since February 1, 2024</Heading>
        <Text fontSize="6xl">{Math.abs(daysSince)}</Text>
        <Text fontSize="xl">{daysSince < 0 ? "days until" : "days since"} February 1, 2024</Text>
      </VStack>
    </Container>
  );
};

export default Index;