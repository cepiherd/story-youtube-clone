import { Icon } from "@iconify/react";
function Short() {
  return (
    <div className="relative md:flex my-5 first:mt-10 last:mb-40">
      <div className="  w-[371px] rounded-2xl h-[661px] bg-slate-700  snap-center relative shadow">
        <div className=" absolute bottom-0 text-white w-full">
          <div className="px-2 py-[16px] flex justify-between w-full">
            <div class="self-center flex w-full">
              <span className="p-[18px] bg-slate-300 rounded-full mr-2"></span>
              <span className="self-center">Cepi Herdiansyah</span>
            </div>
            <button
              name="Subscribe for loving it"
              className="py-[10px] mx-[4px] px-[16px] font-semibold bg-[#CC0000] rounded-sm  text-white"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute md:relative  right-0 bottom-20 md:top-0 h-[661px]  flex flex-col px-2  justify-end md:justify-between md:pl-2   md:w-[76px] text-white">
        <div className="self-center">
          <div className="flex justify-center pt-10">
            <div className="block md:hidden">
              <Icon
                icon="carbon:overflow-menu-horizontal"
                color="#aaa"
                width="24"
                height="24"
              />
            </div>
            <div className="hidden md:block">
              <Icon
                icon="carbon:overflow-menu-vertical"
                width="24"
                height="24"
                color="#AAAAAA"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div className="my-3 self-center">
            <div className="flex justify-center">
              <Icon
                icon="fa6-solid:thumbs-up"
                width="24"
                height="24"
                color="#AAAAAA"
              />
            </div>
            <span>21K</span>
          </div>
          <div className="my-3 self-center">
            <div className="flex justify-center">
              <Icon
                icon="fa6-solid:thumbs-down"
                color="#aaa"
                width="24"
                height="24"
              />
            </div>
            <span>Dislike</span>
          </div>

          <div className="my-3 self-center">
            <div className="flex justify-center">
              <Icon
                icon="ic:round-message"
                color="#aaa"
                width="24"
                height="24"
                hFlip={true}
              />
            </div>
            <span>220</span>
          </div>
          <div className="my-3 self-center text-center">
            <div className="flex justify-center">
              <Icon icon="fa-solid:share" color="#aaa" width="24" height="24" />
            </div>

            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Short;
