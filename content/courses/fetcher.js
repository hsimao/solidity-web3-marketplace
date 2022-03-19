import courses from "./index.json";

export const getAllCourse = () => {
  const courseMap = courses.reduce((acc, it, index) => {
    acc[it.id] = it;
    acc[it.id].index = index;
    return acc;
  }, {});

  return {
    data: courses,
    courseMap
  };
};
