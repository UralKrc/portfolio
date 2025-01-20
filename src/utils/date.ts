export const formatDate = (date: string): string => {
  if (date === "present") return date;
  const [month, year] = date.split("/");
  const dateObj = new Date(parseInt(year), parseInt(month) - 1);
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export const calculateExperience = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  return `${years}+ years of experience`;
};
