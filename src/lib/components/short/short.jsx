import { Icon } from "@iconify/react";
import {  useState } from "react";
function Short(props) {
  const [IsShowToggle, setIsShowToggle] = useState(false);
  const [CapChoose, setCapChoose] = useState("");
  const handleToogle = (toogle, caption) => {
    setIsShowToggle(toogle);
    setCapChoose(caption);
  };
  return (
    <div className="relative md:flex my-5 first:mt-10 last:mb-40">
      <div className="  w-[371px] rounded-2xl h-[661px] bg-slate-700  snap-center relative shadow">
        <object
          aria-label="short"
          className="w-[371px] h-[661px] float-none clear-both rounded-2xl"
          data={props.urlYoutube}
        ></object>
        <div className=" absolute bottom-0 text-white w-full">
          <div className="px-2 text-white">{props.caption}</div>
          <div className="px-2 py-[16px] flex justify-between w-full">
            <div className="self-center flex w-full">
              <span
                className="p-[18px] bg-slate-300 rounded-full mr-2 bg-contain"
                style={{ backgroundImage: `url(${props.channelImage})` }}
              ></span>
              <span className="self-center">{props.channel}</span>
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
            <div className="block md:hidden cursor-pointer">
              <Icon
                icon="carbon:overflow-menu-horizontal"
                color="#aaa"
                width="24"
                height="24"
              />
            </div>
            <div className="hidden md:block cursor-pointer">
              <Icon
                icon="carbon:overflow-menu-vertical"
                width="24"
                height="24"
                color="#AAAAAA"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-3 self-center relative">
            <div
              className="flex justify-center cursor-pointer"
              onMouseEnter={() => {
                handleToogle(true, "Like");
              }}
              onMouseLeave={() => setIsShowToggle(false)}
            >
              <Icon
                icon="fa6-solid:thumbs-up"
                width="24"
                height="24"
                color="#AAAAAA"
              />
              <Toggle
                IsShowToggle={IsShowToggle}
                caption={"Like"}
                capChoose={CapChoose}
              />
            </div>
            <span>21K</span>
          </div>
          <div className="my-3 self-center">
            <div
              className="flex justify-center cursor-pointer relative"
              onMouseEnter={() => handleToogle(true, "Dislike")}
              onMouseLeave={() => setIsShowToggle(false)}
            >
              <Icon
                icon="fa6-solid:thumbs-down"
                color="#aaa"
                width="24"
                height="24"
              />
              <Toggle
                IsShowToggle={IsShowToggle}
                caption="Dislike"
                capChoose={CapChoose}
              />
            </div>
            <span>Dislike</span>
          </div>

          <div className="my-3 self-center">
            <div
              className="flex justify-center cursor-pointer relative"
              onMouseEnter={() => handleToogle(true, "Comment")}
              onMouseLeave={() => setIsShowToggle(false)}
            >
              <Icon
                icon="ic:round-message"
                color="#aaa"
                width="24"
                height="24"
                hFlip={true}
              />
              <Toggle
                IsShowToggle={IsShowToggle}
                caption="Comment"
                capChoose={CapChoose}
              />
            </div>
            <span>220</span>
          </div>
          <div className="my-3 self-center text-center">
            <div
              className="flex justify-center cursor-pointer relative"
              onMouseEnter={() => handleToogle(true, "Share")}
              onMouseLeave={() => setIsShowToggle(false)}
            >
              <Icon icon="fa-solid:share" color="#aaa" width="24" height="24" />
              <Toggle
                IsShowToggle={IsShowToggle}
                caption="Share"
                capChoose={CapChoose}
              />
            </div>

            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Short;

function Toggle(props) {
  if (props.IsShowToggle === true && props.capChoose === props.caption) {
    return (
      <div className="absolute top-0 right-10  backdrop-opacity-60 bg-slate-400/30 font-normal px-2 py-1 rounded backdrop-invert ">
        {props.caption}
      </div>
    );
  }
}
