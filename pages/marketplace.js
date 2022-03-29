import BaseLayout from "@components/ui/layout/baseLayout";
import { CourseList, CourseCard } from "@components/ui/course";
import { WalletBar } from "@components/ui/web3";
import { getAllCourse } from "@content/courses/fetcher";
import { useAccount, useNetwork } from "@components/hooks/web3";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} network={network} />
      </div>
      <CourseList courses={courses}>
        {(course) => <CourseCard key={course.id} course={course} />}
      </CourseList>
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

Marketplace.Layout = BaseLayout;
