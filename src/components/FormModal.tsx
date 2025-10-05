"use client"
import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
const FormModal = ({table,type,data,id}:
  {
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";

    type:"create" | "update" | "delete";
    data?:any;
    id?: number;
}) => {
  //三元判定：create按钮更大
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7" 
  const bgColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple";

  // 点击按钮
  const [open, setOpen] = useState(false);

  //删除通用form：
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table}?</span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delect</button>
      </form>
    ) : (
      <TeacherForm type="create"/> 
    );
  }

  return (<>
  {/* 传递上面的const */}
  <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
          onClick={() => setOpen(true)}
  >
    <Image src={`/${type}.png`} alt="" width={16} height={16} />

  </button>
  {/* bg-opacity-60:背景颜色透明度 */}
  {/* z-50 元素在最上层 */}
  {open && <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                <Form/>
                {/* 给弹窗设计关闭按钮 */}
                <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(false)}>
                  <Image src="/close.png" alt="" width={14} height={14} />
                </div>
              </div>
              
          </div>}
  </>
    
  )
}

export default FormModal