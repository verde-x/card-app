import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { type Skills } from "../types/supabase";

export const useSkill = (userId: string | undefined) => {
  const [skill, setSkill] = useState<Skills | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserSkillData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const { data: userSkillData, error: userSkillError } = await supabase
          .from("user_skill")
          .select("*")
          .eq("user_id", userId)
          .single();

        if (userSkillError) {
          console.log("Error", userSkillError);
          setError(userSkillError);
          return;
        }

        const { data: skillsData, error: skillError } = await supabase
          .from("skills")
          .select("*")
          .eq("id", userSkillData.skill_id)
          .single();

        if (skillError) {
          console.log("Error", skillError);
          setError(skillError);
          return;
        }

        setSkill(skillsData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserSkillData();
  }, [userId]);

  return { skill, loading, error };
};
