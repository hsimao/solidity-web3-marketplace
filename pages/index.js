import BaseLayout from "@components/ui/layout/baseLayout";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { getAllCourse } from "@content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <>
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourse();

  return {
    props: {
      courses: data
    }
  };
}

Home.Layout = BaseLayout;
