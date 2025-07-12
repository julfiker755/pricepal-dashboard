import { CreditCard, LibraryBig, Users2 } from "lucide-react";
import StartCard from "@/components/reuseable/start-card";
import BookingStatictis from "@/components/common/chart/booking";
import DonutChart from "@/components/common/chart/pie";
import NavTitle from "@/components/reuseable/nav-title";

const stats = [
  { title: "Earnings", value: "$500.00", icon: CreditCard },
  { title: "Appointments", value: "16", icon: LibraryBig },
  { title: "Users", value: "1200", icon: Users2 },
];

const Dashboard = () => (
  <div>
    <NavTitle title={"Dashboard overview"} subTitle={"You can see all of the overview of your app from here"} />
    <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-4">
      {stats.map((item, idx) => (
        <StartCard
          key={idx}
          title={item.title}
          value={item.value}
          Icon={item.icon}
        />
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <BookingStatictis />
      <DonutChart />
    </div>
  </div>
);

export default Dashboard;
