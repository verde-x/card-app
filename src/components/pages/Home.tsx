import { useState, memo, type FC, type ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heading, Card, Field, Input, Box } from "@chakra-ui/react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserId(e.target.value);
  };

  return (
    <>
      <Heading size="2xl" mb="6">
        デジタル名刺アプリ
      </Heading>

      <Card.Root bg="white" color="#111" maxW="400px">
        <Card.Body>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              ID
            </Field.Label>
            <Input name="user_id" value={userId} onChange={handleChange} />
          </Field.Root>

          <PrimaryButton
            size="sm"
            mt="4"
            onClick={() => {
              navigate(`/cards/${userId}`);
            }}
            // loading={loading}
          >
            名刺を見る
          </PrimaryButton>
        </Card.Body>
      </Card.Root>
      <Box mt="8">
        <Link to="/cards/register" style={{ color: "gray" }}>
          新規作成はこちら
        </Link>
      </Box>
    </>
  );
});
