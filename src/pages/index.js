import Image from "next/image";
import { Inter } from "next/font/google";
import Nabvar from "@/components/Nabvar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h2 className="font-bold hover:italic">HomePage</h2>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          iure!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          iure!
        </p>
        <Link href="ninjas">Show all ninjas</Link>
      </div>
    </>
  );
}
