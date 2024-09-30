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
          const response = {
            success: true,
            profile: {
              user_uuid: "aa2a7a42-82a7-4350-b23f-57c74445964d",
              email: "npm@gmail.com",
              username: "jaytest",
              display_name: "Jaytest",
              location: "California, USA",
              biography:
                "Hey there! I'm Jaytest, a passionate gamer with a love for all things competitive and immersive. From mastering FPS games to diving into RPG worlds, I’ve spent countless hours exploring different realms and leveling up my skills. Whether I’m playing solo or teaming up with friends, I thrive on strategy, fast reflexes, and the thrill of the game.",
              avatar_uri:
                "https://img.freepik.com/free-vector/cute-girl-gaming-holding-joystick-cartoon-icon-illustration-people-technology-icon-concept-isolated-flat-cartoon-style_138676-2169.jpg?ga=GA1.1.1876678693.1727699364&semt=ais_hybrid",
              banner_uri: "/images/content/profile/default_banner.png",
              badge: "",
              socials: null,
              created_at: "2024-01-18T01:08:19+0000",
            },
          };

          setProfile(response.profile);
          localStorage.setItem("userProfile", JSON.stringify(response.profile));
          console.log(err);
        });
    }
    setProfile(JSON.parse(user));
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
