const hasTailwindItem = (item: string, className: string): boolean => {
  const re = new RegExp(`\\b${item}-\\b`);
  return re.test(className);
};

const addTailwindDefault = (className: string, item: string): string => {
  const [classGroup] = item.split("-");
  if (hasTailwindItem(classGroup, className)) {
    return className;
  }
  return `${className} ${item}`;
};

export const addTailwindDefaults = (
  className: string | undefined,
  items: string
): string => items.split(" ").reduce(addTailwindDefault, className ?? "");
