import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between bg-violet-700 text-white p-5 oswald">
      <div className="flex flex-row justify-evenly w-[70%]">
        <div>GOT-ARTIFACT</div>
        <div>PLAYERS</div>
        <div>STUDIOS & PUBLISHERS</div>
        <div>ADVERTISERS</div>
        <div>ABOUT</div>
        <div>BLOG</div>
      </div>
      <div className="flex flex-row justify-evenly w-[20%]">
        <div>
          <FaDiscord className="size-[2rem]" />
        </div>
        <div>
          <FaTwitter className="size-[1.7rem]" />
        </div>
        <div>LOGOUT</div>
      </div>
    </div>
  );
}
