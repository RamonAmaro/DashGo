import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { RiAddLine, RiEdit2Line } from "react-icons/ri";
import { Header, Pagination, Sidebar } from "../../components";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefecthUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      { staleTime: 1000 * 60 * 10 }
    );
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px={["4", "6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "6"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.50" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
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
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text> Falha ao obter dados dos usuarios </Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gra.300" w="8">
                      <Checkbox colorSchema="pink" />
                    </Th>
                    <Th> Usuário</Th>
                    <Th> {isWideVersion && "Data de Criação"} </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map((user) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => handlePrefecthUser(user.id)}
                          >
                            <Text fontWeight="bold"> {user.name} </Text>
                          </Link>
                          <Text fontSize={["xs", "sm"]} color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      <Td>
                        <Flex
                          justify={isWideVersion ? "space-between" : "flex-end"}
                          align="center"
                        >
                          {isWideVersion && <Text> {user.createdAt} </Text>}
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiEdit2Line} />}
                            cursor="pointer"
                          >
                            {isWideVersion ? "Editar" : ""}
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
