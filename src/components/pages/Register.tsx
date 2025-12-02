import { useEffect, useState, memo, type FC, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Card, Field, Input, Select, Button } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";
import { type Form } from "@/types/form";
import { supabase } from "@/lib/supabase";

export const Register: FC = memo(() => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Form>({
    user_id: "",
    name: "",
    description: "",
    skill_id: 0,
    github_id: "",
    giita_id: "",
    x_id: "",
  });
  const [skills, setSkills] = useState<{ label: string; value: string }[]>([]);

  const fetchSkills = async () => {
    const { data, error } = await supabase.from("skills").select("*");
    if (error) {
      console.log("Error: ", error);
      return;
    }

    if (data) {
      const formattedDSkills = data.map((skill) => ({
        label: skill.name,
        value: skill.id.toString(),
      }));
      setSkills(formattedDSkills);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const skillsCollection = createListCollection({
    items: skills,
  });

  const registCard = async (formData: Form) => {
    const { skill_id, ...userData } = formData;

    const { error: errorUsers } = await supabase
      .from("users")
      .insert([userData]);
    if (errorUsers) {
      console.log("Error: ", errorUsers);
      throw errorUsers;
    }

    const { error: errorUserSkill } = await supabase
      .from("user_skill")
      .insert([{ user_id: formData.user_id, skill_id }]);
    if (errorUserSkill) {
      console.log("Error: ", errorUserSkill);
      throw errorUserSkill;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.user_id) {
      alert("好きな英単語は必須です");
      return;
    }
    if (!formData.name) {
      alert("名前は必須です");
      return;
    }
    if (!formData.description) {
      alert("自己紹介は必須です");
      return;
    }

    setLoading(true);
    try {
      await registCard(formData);

      setFormData({
        user_id: "",
        name: "",
        description: "",
        skill_id: 0,
        github_id: "",
        giita_id: "",
        x_id: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
      alert("登録に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Heading size="2xl" mb="6">
        新規名刺登録
      </Heading>

      <Card.Root bg="white" color="#111" maxW="400px">
        <Card.Body>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              好きな英単語(ID)*
            </Field.Label>
            <Input
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
            />
          </Field.Root>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              名前*
            </Field.Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </Field.Root>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              自己紹介*
            </Field.Label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Field.Root>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              好きな技術*
            </Field.Label>
            <Select.Root
              name="skill_id"
              collection={skillsCollection}
              onValueChange={(details) => {
                const skillId = details.value[0];
                setFormData((prev) => ({
                  ...prev,
                  skill_id: Number(skillId),
                }));
              }}
            >
              <Select.Trigger
                bg="white"
                borderWidth="1px"
                borderColor="black"
                borderRadius="sm"
                px="3"
                py="2"
                _hover={{
                  borderColor: "gray.400",
                }}
                _focus={{
                  borderColor: "gray.500",
                  boxShadow: "0 0 0 1px",
                  outline: "none",
                }}
              >
                <Select.ValueText placeholder="選択してください" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Positioner>
                <Select.Content bg="white">
                  {skillsCollection.items.map((skill) => (
                    <Select.Item key={skill.value} item={skill}>
                      {skill.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
          </Field.Root>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              GitHub ID
            </Field.Label>
            <Input
              name="github_id"
              value={formData.github_id}
              onChange={handleChange}
            />
          </Field.Root>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              Giita ID
            </Field.Label>
            <Input
              name="giita_id"
              value={formData.giita_id}
              onChange={handleChange}
            />
          </Field.Root>
          <Field.Root mb="4">
            <Field.Label fontSize="sm" color="gray.600">
              X ID
            </Field.Label>
            <Input name="x_id" value={formData.x_id} onChange={handleChange} />
          </Field.Root>

          <Button
            size="sm"
            bg="blue.500"
            color="white"
            variant="solid"
            mt="4"
            onClick={handleSubmit}
            loading={loading}
          >
            登録
          </Button>
        </Card.Body>
      </Card.Root>
    </>
  );
});
