import Image from "next/image"
// ({type}:{type:string})这个括号里的是属性部分，里面包含了从父组件（page）传过来的参数：<UserCard type="teacher"/>
//这种写法是为了：父组件管理数据，子组件来展示，所以不要写死
const UserCard = ({type}:{type:string}) => {
  return (
    // 这里使用的颜色在tailwind.config.ts中自定义
    //min-w-[130px]：屏幕伸缩时的最小宽度
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      {/* justify-between items-center：两端对齐中间留空；y轴居中 */}
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <Image src="/more.png" alt="" width={20} height={20}/>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      {/* 显示参数 */}
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  )
}

export default UserCard