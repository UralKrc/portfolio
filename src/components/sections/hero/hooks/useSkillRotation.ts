import { useEffect, useState } from "react";

export const useSkillRotation = (
  skills: readonly string[],
  interval = 2000
) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, interval);

    return () => clearInterval(timer);
  }, [skills.length, interval]);

  return {
    currentSkill: skills[currentSkillIndex],
    currentSkillIndex,
  };
};
