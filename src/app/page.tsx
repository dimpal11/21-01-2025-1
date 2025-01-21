// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/HomePage";
import Banner from "@/components/Banner";
import Select from "@/components/Select";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Banner />
      <Select />
      <Table />
      <Pagination />
    </div>
  );
}
