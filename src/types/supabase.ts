export type Users = {
  user_id: string;
  name: string;
  description: string;
  github_id: string;
  giita_id: string;
  x_id: string;
};

export type UserSkill = {
  id: number;
  user_id: string;
  skill_id: number;
};

export type Skills = {
  id: number;
  name: string;
};
