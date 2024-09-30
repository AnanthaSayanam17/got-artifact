import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function SavedProfile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    interest1: "",
    interest2: "",
    email: "",
    username: "",
    display_name: "",
    avatar_uri: "",
    biography: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userProfile") ?? null;

    if (user === undefined || user === null || user.length === 0) {
      axios
        .get("https://api-staging-0.gotartifact.com/v2/users/me")
        .then((res) => {
          if (res.data) {
          } else {
            console.log("NOT FOUND");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setProfile(JSON.parse(user));
    }
  }, []);

  const editUser = () => {
    navigate("/user");
  };

  return (
    <div className="flex justify-center mt-[3rem]">
      <div className=" flex flex-col gap-3 justify-center items-center border rounded-lg border-black bg-white w-[50%] p-10 oswald">
        <div className="flex flex-row justify-evenly items-center">
          <div>
            <FaDiscord className="size-[4rem]" />
          </div>
          <img
            src={profile.avatar_uri}
            alt="avatar"
            width="30%"
            height="30%"
            className="border rounded-full"
          ></img>
          <div>
            <FaTwitter className="size-[3.5rem]" />
          </div>
        </div>
        <div className="text-[2.5rem] font-normal">{profile.display_name}</div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="size-4">
            <MdLocationOn />
          </div>
          {profile.location}
        </div>
        <div className="font-light">{profile.biography}</div>
        <div>Email: {profile.email}</div>
        <div>Username: {profile.username}</div>
        <div className="flex justify-center mt-2">
          <button
            onClick={editUser}
            className="border rounded-[0.5rem] border-black p-2 bg-violet-700 hover:bg-violet-500 text-white oswald w-[10rem]"
          >
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
}
