const Header = () => {
  return (
    <header className="border-b container mx-auto">
      {/* logo section */}

      {/* main header section */}
      <div className="flex items-center justify-between py-3 px-5">
        <div
          className="flex items-center border w-80 pr-3 gap-2 bg-white border-primary h-[46px] rounded-[5px] overflow-hidden"
        >
          <img src="/MagnifyingGlass.svg" alt="" className="pl-5" />
          <input
            className="w-full h-full outline-none placeholder-gray-500 text-sm"
            placeholder="Search"
            type="text"
          />
          <div className="flex-center gap-4">
            <div className="bg-[#fff4f0] text-white size-[19px] rounded-[5px] flex-center">
              <img src="/Command.svg" alt="" />
            </div>
            <div className="bg-[#fff4f0] text-white size-[19px] rounded-[5px] flex-center">
              <img src="/F.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex-center gap-4">
          <div className="flex-center size-8 rounded-[8px] border-[1px] border-[#e7eae9]">
            <img src="/notification.svg" alt="notification" />
          </div>
          <div className="flex-center gap-[12px]">
            <img src="/avatar.png" alt="avatar" className="size-[30px]" />
            <p className="text-[13px]">Harsh</p>
            <img src="/CaretDown.svg" alt="avatar" className="size-[15px]" />
          </div>
        </div>
      </div>



    </header>
  )
}

export default Header