import BaseLayout from "@components/layout/baseLayout";
import { Hero, Breadcrumbs } from "@components/common";
import { EthRates, WalletBar } from "@components/web3";
import { OrderCard } from "@components/order";
import { CourseList } from "@components/course";

export default function Home() {
  return (
    <>
      <Hero />
      <Breadcrumbs />
      <EthRates />
      <WalletBar />
      <OrderCard />
      <CourseList />
    </>
  );
}

Home.Layout = BaseLayout;
