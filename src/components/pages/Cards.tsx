import { memo, type FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Box, HStack, Icon, Heading, Text } from "@chakra-ui/react";
import { FaHeart, FaGithub, FaTwitter } from "react-icons/fa";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { useUser } from "../../hooks/useUser";
import { useSkill } from "../../hooks/useSkill";

export const Cards: FC = memo(() => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { userData, loading: loadingUser, error: userError } = useUser(id);
  const { skill, loading: loadingSkill } = useSkill(id);

  if (loadingUser || loadingSkill) return <p>Loading...</p>;

  if (userError || !userData) {
    return (
      <Box>
        <Heading size="lg" mb="4">
          ユーザーが見つかりません
        </Heading>
        <Text mb="4">指定されたIDのユーザーは登録されていません。</Text>
        <PrimaryButton mt="4" onClick={() => navigate("/")}>
          ホームに戻る
        </PrimaryButton>
      </Box>
    );
  }

  return (
    <>
      <Card.Root bg="white" color="#111" maxW="400px">
        <Card.Body>
          <Card.Title fontSize="2xl" fontWeight="bold" mb="6">
            {userData?.name}
          </Card.Title>
          <Box mb="6">
            <Card.Description fontSize="sm" color="gray.600" mb="0.5">
              自己紹介
            </Card.Description>
            <Box>{userData?.description}</Box>
          </Box>
          <Box mb="6">
            <Card.Description fontSize="sm" color="gray.600" mb="0.5">
              好きな技術
            </Card.Description>
            <Box>{skill?.name}</Box>
          </Box>
          <HStack gap="12" mt="4">
            {userData?.github_id && (
              <a
                href={`https://github.com/$userData.github_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon fontSize="2xl" color="black">
                  <FaGithub />
                </Icon>
              </a>
            )}
            {userData?.giita_id && (
              <a
                href={`https://qiita.com/${userData.giita_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon fontSize="2xl" color="black">
                  <FaHeart />
                </Icon>
              </a>
            )}
            {userData?.x_id && (
              <a
                href={`https://twitter.com/${userData.x_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon fontSize="2xl" color="black">
                  <FaTwitter />
                </Icon>
              </a>
            )}{" "}
          </HStack>
        </Card.Body>
      </Card.Root>
      <PrimaryButton
        mt="4"
        w="full"
        fontSize="md"
        onClick={() => {
          navigate("/");
        }}
      >
        戻る
      </PrimaryButton>
    </>
  );
});
