import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">

        {/* left */}
        {/* 宽度还可以用w-1/6，就是屏幕六分之一 */}
        <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]'>
          {/* 先同行；在保持居中；lg时左对齐；gap2 */}
          <Link href="/" 
          className="flex items-center justify-center lg:justify-start gap-2 p-4">
            <Image src="/logo.png" alt="logo" width={32} height={32}/>
            <span className="hidden lg:block">SchoolLama</span>
          </Link>

          <Menu/>


        </div>




        {/* right */}
        {/* overflow-scroll:右侧可以滑动 */}
        <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll'>

          <Navbar/>
          {children}
        </div>
      
      </div>
    );
  
    
  }