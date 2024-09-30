import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
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

  const [tempAvatarUri, setTempAvatarUri] = useState(profile.avatar_uri);

  const handleAvatarChange = (e) => {
    setTempAvatarUri(e.target.value);
  };

  const changeAvatar = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      avatar_uri: tempAvatarUri,
    }));
  };

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("userProfile")));
  }, []);

  const navigate = useNavigate();

  const fetchUserLocation = async () => {
    try {
      const response = await axios.get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=dc8e42b9d8ac474a9b3b55518b553322&ip_address=120.15.77.226"
      );
      setProfile((prevProfile) => ({
        ...prevProfile,
        location: response.data.city,
      }));
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const saveUser = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    console.log(profile);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleLocationOverride = (e) => {
    const { value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, location: value }));
  };

  return (
    <div className="border rounded-xl border-black mx-[5rem] my-[3rem] p-9 bg-white">
      <div className="flex flex-row">
        <div className="text-2xl text-black oswald">User Profile</div>
        <div className="flex flex-col w-[50%] items-center">
          <div className="flex flex-row justify-center items-center">
            <img
              src={profile.avatar_uri}
              alt="avatar"
              width="30%"
              height="30%"
              className="border rounded-full"
            ></img>
            <div className="p-3">
              <label className="oswald">Avatar Url:</label>
              <br />
              <input
                type="text"
                name="avatar_uri"
                value={tempAvatarUri}
                onChange={handleAvatarChange}
                className="border rounded-[0.3rem] border-black p-[0.3rem]"
              />
              <button
                onClick={changeAvatar}
                className="border rounded-[0.5rem] border-black p-2 ml-2 bg-violet-700 hover:bg-violet-500 text-white oswald"
              >
                Change Avatar
              </button>
            </div>
          </div>
          <div className="p-3">
            <label className="oswald">Display Name:</label>
            <br />
            <input
              type="text"
              name="display_name"
              value={profile.display_name}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>
          <div className="p-3">
            <label className="oswald">Age:</label>
            <br />
            <input
              type="number"
              min={0}
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>
          <div className="p-3">
            <label className="oswald">Gender:</label>
            <br />
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>

          <div className="p-3">
            <label className="oswald">Location:</label>
            <br />
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleLocationOverride}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem]"
            />
            <button
              onClick={fetchUserLocation}
              className="border rounded-[0.5rem] border-black p-2 m-3 bg-violet-700 hover:bg-violet-500 text-white oswald"
            >
              Auto-fill Location
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="p-3">
            <label className="oswald">BioGraphy:</label>
            <br />
            <textarea
              name="biography"
              value={profile.biography}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[1rem] w-[20rem] min-h-[10rem]"
            ></textarea>
          </div>
          <div className="p-3">
            <label className="oswald">Interest 1:</label>
            <br />
            <input
              type="text"
              name="interest1"
              value={profile.interest1}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>
          <div className="p-3">
            <label className="oswald">Interest 2:</label>
            <br />
            <input
              type="text"
              name="interest2"
              value={profile.interest2}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>
          <div className="p-3">
            <label className="oswald">Email:</label>
            <br />
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>
          <div className="p-3">
            <label className="oswald">Username:</label>
            <br />
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="border rounded-[0.3rem] border-black mt-2 p-[0.3rem] w-[20rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={saveUser}
          className="border rounded-[0.5rem] border-black p-2 bg-violet-700 hover:bg-violet-500 text-white oswald w-[10rem]"
        >
          Save User
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
