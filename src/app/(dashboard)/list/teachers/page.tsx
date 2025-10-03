import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Teacher = {
  id:number;
  teacherId:string;
  name:string;
  email?:string;
  photo:string;
  phone:string;
  subjects:string[];
  classes:string[];
  address:string;
}
const columns = [
  {
    header:"Info", 
    accessor:"info"
  },
  {
    header:"Teacher ID", 
    accessor:"teacherId",
    // 默认隐藏；md及以上：显示为表格单元格
    className:"hidden md:table-cell",
  },
  {
    header:"Subjects", 
    accessor:"subjects",
    // 默认隐藏；md及以上：显示为表格单元格
    className:"hidden md:table-cell",
  },
  {
    header:"Classes", 
    accessor:"classes",
    // 默认隐藏；md及以上：显示为表格单元格
    className:"hidden md:table-cell",
  },
  {
    header:"Phone", 
    accessor:"phone",
    // 默认隐藏；md及以上：显示为表格单元格
    className:"hidden lg:table-cell",
  },

  {
    header:"Address", 
    accessor:"address",
    // 默认隐藏；md及以上：显示为表格单元格
    className:"hidden lg:table-cell",
  },

  {
    header:"Actions", 
    accessor:"actions",

  },

]
const TeacherListPage = () => {

  const renderRow = (item:Teacher) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        {/* object-cover：图片保持比例，尽可能铺满容器 */}
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover"></Image>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      {/* className="hidden md:table-cell" join是js里的一个数组的方法：array.join(separator)；把每一项拼接成一个字符串，用separator连接 */}
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      {/* ACTION */}
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
            {role === "admin" && (
              // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              //   <Image src="/delete.png" alt="" width={16} height={16} />
              // </button>
              // 引用组件FormModal
              //DELETE BUTTON
              <FormModal table="teacher" type="delete" id={item.id}/>
            )}
          
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          {/* self-end：子元素末尾对齐 */}
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button> */}

            {/* CREATE BUTTON */}
            {role === "admin" &&(
              <FormModal table="teacher" type="create"/>
            )}
            
          </div>
        </div>

      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      {/* pagination */}

      <Pagination />

    </div>


  )
}

export default TeacherListPage