import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";
import { useAuth } from "../services/Auth/auth";

interface ISignInFormData {
  email: string;
  password: string;
}

const SignInSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function SignIn() {
  const { signIn } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const handleSignIn: SubmitHandler<ISignInFormData> = async (
    values,
    event
  ) => {
    event.preventDefault();

    await signIn(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="Email"
            type="email"
            error={formState.errors.email}
            {...register("email")}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            error={formState.errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
