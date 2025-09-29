import Image from "next/image"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* search bar */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14}/>
            {/* bg-transparent：透明背景 */}
            <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
        </div>
        {/* ICONS AND USERS */}
        {/* justify-end：让元素靠右 w-full：容器沾满整行，给justify-end生效的空间 */}
        <div className="flex items-center gap-6 justify-end w-full">
            {/* cursor-pointer：光标变小手：可点击 */}
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20}></Image>
            </div>
            {/* relative：因为在下面使用了absolute，所以它可以让父元素称为参考点 */}
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20}></Image>
                
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
            </div>

            {/* user name */}
            <div className="flex flex-col">
                {/* leading-3:行高3 */}
                <span className="text-xs leading-3 font-medium">John Doe</span>
                {/* text-right:文本靠右 */}
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>

            {/* 用户头像 */}
            <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"></Image>

        </div>
    </div>
  )
}

export default Navbar