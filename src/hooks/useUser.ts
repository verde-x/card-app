import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { type Users } from "../types/supabase";

export const useUser = (userId: string | undefined) => {
  const [userData, setUserData] = useState<Users | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsersData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const { data, error: supabaseError } = await supabase
          .from("users")
          .select("*")
          .eq("user_id", userId)
          .single();

        if (supabaseError) {
          console.log("Error", supabaseError);
          setError(supabaseError);
          return;
        }

        setUserData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, [userId]);

  return { userData, loading, error };
};
