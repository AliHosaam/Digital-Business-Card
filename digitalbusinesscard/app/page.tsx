import UserProfile from "./components/UserProfile";

export default function Home() {
  return (
    <UserProfile
      image="/Profile-Image.jpeg"
      name="Ali Hosam"
      role="Full-Stack Developer"
      linkedin="https://www.linkedin.com/in/ali-hosam-8278a1284/"
      about=" I am a fullstack developer with a particular interest in making
      things simple and automating daily tasks. I try to keep up with
      security and best practices, and am always looking for new things to
      learn."
      interests="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      github="https://github.com/AliHosaam"
    />
  );
}
