export const toggleTheme = (isDark: boolean): void => {
  const html = document.documentElement;
  if (isDark) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
};

export const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
};
