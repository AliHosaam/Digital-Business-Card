import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

interface UserProfileProps {
  image: string;
  name: string;
  role: string;
  linkedin?: string;
  about: string;
  interests: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  image,
  name,
  role,
  linkedin,
  about,
  interests,
  github,
  facebook,
  instagram,
  twitter,
}) => {
  return (
    <div className="flex flex-col bg-gray-800 h-screen items-center justify-center">
      <div className="bg-gray-900 w-[350px] h-[800px] rounded-lg">
        <div className="h-[317px] overflow-hidden">
          <Image
            src={image}
            alt="Profile"
            width={350}
            height={50}
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 ml-[130px]">
          <div className="text-white font-bold text-xl">{name}</div>
        </div>
        <div className="text-orange-200 font-bold text-sm ml-[110px] mb-[0px]">
          {role}
        </div>
        <div className="mt-8 ml-10">
          <a href={linkedin}>
            <button className="flex items-center justify-center bg-blue-500 text-white w-[270px] h-[36px] rounded-md border border-slate-500">
              <FaLinkedin size={20} color="white" className="mr-2" />
              LinkedIn
            </button>
          </a>
        </div>
        <div className="flex flex-col m-10">
          <div className="font-bold text-xl mb-2 text-white">About</div>
          <p className="text-slate-400 text-xs mb-5">{about}</p>
          <div className="font-bold text-xl mb-2 text-white">Interests</div>
          <p className="text-slate-400 text-xs">{interests}</p>
        </div>
        <div className="flex bg-black h-[55px] rounded-br-lg rounded-bl-lg items-center justify-center">
          <a href={github} className="mr-10">
            <FaGithub size={30} color="gray" className="rounded-none" />
          </a>
          <a href={facebook}>
            <FaFacebook size={30} color="gray" className="ml-1 rounded-none" />
          </a>
          <a href={instagram}>
            <FaInstagram size={30} color="gray" className="ml-11" />
          </a>
          <a href={twitter}>
            <FaTwitter size={30} color="gray" className="ml-11" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
