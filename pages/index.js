import BaseLayout from "@components/ui/layout/baseLayout";
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { getAllCourse } from "@content/courses/fetcher";
import { useWeb3 } from "@components/providers";

export default function Home({ courses }) {
  const { web3, isLoading } = useWeb3();

  return (
    <>
      {isLoading
        ? "Is Loading Web3"
        : web3
        ? "Web3 Ready!"
        : "Plaes install metamask!"}
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
