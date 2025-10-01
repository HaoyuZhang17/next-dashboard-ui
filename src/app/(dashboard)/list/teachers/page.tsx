import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"

type Teacher = {
  id:number;
  teacherId:string;
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

  const renderRow = (item:Teacher) => {
    <tr>
      <td>
        {/* object-cover：图片保持比例，尽可能铺满容器 */}
        <Image src={item.phone} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover"></Image>
      </td>
    </tr>
  }
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
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>

      </div>

      {/* list */}
      <Table columns={columns}/>
      {/* pagination */}

      <Pagination />

    </div>


  )
}

export default TeacherListPage