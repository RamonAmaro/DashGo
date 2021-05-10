import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import { Header, Input, Sidebar } from "../../components";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

interface ICreateUserFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, " A Senha precisa no minimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(
    async (user: ICreateUserFormData) => {
      const response = await api.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<ICreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);

    router.push("/users");
  };

  return (
    <Box>
      <Header />

      <Flex w="100vw" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my={["10", "14", "16"]} borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="nome"
                type="text"
                label="Nome Completo"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                name="email"
                type="email"
                label="Email"
                {...register("email")}
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={formState.errors.password}
              />
              <Input
                name="confirmPassword"
                type="password"
                label="Confirmação da senha"
                {...register("confirmPassword")}
                error={formState.errors.confirmPassword}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={["6", "8"]} justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" bgColor="whiteAlpha.500">
                  Cancelar
                </Button>
              </Link>
              <Button
                bgColor="pink.500"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
