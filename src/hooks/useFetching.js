import { useState } from "react";

export const useFetching = (callback) => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      setErrors(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, errors];
};
