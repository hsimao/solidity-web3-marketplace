import BaseLayout from "@components/ui/layout/baseLayout";
import { CourseList } from "@components/ui/course";
import { WalletBar } from "@components/ui/web3";
import { getAllCourse } from "@content/courses/fetcher";
import { useAccount } from "@components/hooks/web3/useAccount";

export default function Marketplace({ courses }) {
  const { account } = useAccount();

  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} />
      </div>
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

Marketplace.Layout = BaseLayout;
