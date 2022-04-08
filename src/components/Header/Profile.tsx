import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
   <Flex align="center">
      <Box mr="4" textAlign="right">
         <Text>Matheus Ferreira</Text>
         <Text color="gray.300" fontSize="small">
            matheus.fer33@gmail.com
         </Text>
      </Box>

      <Avatar size="md" name="Matheus Ferreira" src="https://github.com/matheus-ferreira1.png" />
   </Flex>
  )
}
