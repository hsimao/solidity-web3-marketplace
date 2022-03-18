import { Navbar, Footer, Hero, Breadcrumbs } from "@components/common";
import { EthRates, WalletBar } from "@components/web3";
import { OrderCard } from "@components/order";
import { CourseList } from "@components/course";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <EthRates />
            <WalletBar />
            <OrderCard />
            <CourseList />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
