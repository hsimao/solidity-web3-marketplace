import BaseLayout from "@components/layout/baseLayout";
import { Modal } from "@components/common";
import { CourseHero, Curriculum, Keypoints } from "@components/course";
import { getAllCourse } from "@content/courses/fetcher";

export default function Course({ course }) {
  return (
    <>
      <div className="py-4">
        <CourseHero
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
      </div>
      <Keypoints points={course.wsl} />
      <Curriculum locked={false} />
      <Modal />
    </>
  );
}

export function getStaticPaths() {
  const { data } = getAllCourse();

  const paths = data.map(({ slug }) => ({
    params: {
      slug
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const { data } = getAllCourse();
  const course = data.find(({ slug }) => slug === params.slug);

  return {
    props: {
      course
    }
  };
}

Course.Layout = BaseLayout;
