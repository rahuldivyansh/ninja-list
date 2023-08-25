import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    let router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    },[])
  return (
    <div>
      <h2 className="">Oops</h2>
      <h3>Invalid URL. Page not found</h3>
      <p>
        If not automatically redirected to HomePage in 3 seconds, click
        <Link href="/"> here.</Link>
      </p>
    </div>
  );
};

export default NotFound;
