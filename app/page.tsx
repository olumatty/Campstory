'use client'
import { useEffect, useState } from "react";
import Camp from "@/Components/Camp";
import Features from "@/Components/Features";
import GetApps from "@/Components/GetApps";
import Guide from "@/Components/Guide";
import Hero from "@/Components/Hero";
import Loading from "./loading";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); 
  },[])

  if(isLoading) {
    return<Loading/>
  }
  return (
    <div className="text-red-400">
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApps/>
    </div>
  );
}
