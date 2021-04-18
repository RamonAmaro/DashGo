import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiEdit2Line } from "react-icons/ri";
import { Header, Pagination, Sidebar } from "../../components";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100vw" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gra.300" w="8">
                  <Checkbox colorSchema="pink" />
                </Th>
                <Th>Usuàrio</Th>
                <Th>Data de cadastro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold"> Ramon Amaro </Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      ramonamaro.dev@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Flex justify="space-between" align="center">
                    <Text> 04 jul, 2021 </Text>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiEdit2Line} />}
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold"> Ramon Amaro </Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      ramonamaro.dev@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Flex justify="space-between" align="center">
                    <Text> 04 jul, 2021 </Text>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiEdit2Line} />}
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold"> Ramon Amaro </Text>
                    <Text fontWeight="normal" fontSize="sm" color="gray.300">
                      ramonamaro.dev@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Flex justify="space-between" align="center">
                    <Text> 04 jul, 2021 </Text>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiEdit2Line} />}
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
