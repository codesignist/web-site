import SocialArea from "components/organisms/SocialArea";
import Link from "next/link";

const stack = ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"];

export default function Home() {
  return (
    <div className="m-auto px-6 py-8 w-full max-w-[800px] min-h-screen grid grid-flow-col gap-10 justify-center justify-items-center content-center items-start relative before:content-[''] before:fixed before:top-0 before:left-0 before:w-screen before:h-screen before:bg-[radial-gradient(circle_at_50%_50%,rgba(2,159,237,0.08)_0%,transparent_70%)] before:pointer-events-none before:z-0 max-md:max-w-full max-md:min-h-screen max-md:content-start max-md:text-center max-md:grid-flow-row max-md:gap-8 max-md:px-4 max-md:pt-8 max-md:pb-6">
      <div className="relative z-1 animate-fade-in-up flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/25 blur-3xl -z-1" />
          <img
            className="relative w-[200px] h-[200px] rounded-full border-3 border-primary object-cover transition-transform duration-300 hover:scale-[1.02] max-md:w-[150px] max-md:h-[150px]"
            src="Avatar.png"
            width={200}
            height={200}
            alt="Yunus Eş"
          />
        </div>
        <div className="mt-5 text-center animate-fade-in-up [animation-delay:0.3s]">
          <div className="text-xs uppercase tracking-[3px] text-primary font-medium">
            Full Stack Developer
          </div>
          <div className="mt-1 text-xs text-white/50">
            CodeCube Software Kurucusu
          </div>
        </div>
      </div>
      <div className="relative z-1 animate-fade-in-up [animation-delay:0.2s]">
        <div className="bg-white/[0.02] backdrop-blur-[8px] border border-white/[0.08] rounded-2xl p-8 animate-fade-in-up [animation-delay:0.4s] transition-[border-color] duration-300 hover:border-[rgba(2,159,237,0.2)] max-md:bg-transparent max-md:backdrop-blur-none max-md:border-0 max-md:rounded-none max-md:p-0 max-md:hover:border-0">
          <span className="block leading-[1.2em] tracking-[2px] text-lg font-light text-white/70 mb-2 animate-fade-in-up [animation-delay:0.5s]">
            Merhaba Dünya,
          </span>
          <h1 className="m-0 mb-5 text-5xl font-black leading-[1.1em] text-white animate-fade-in-up [animation-delay:0.6s] max-[425px]:text-[28px]">
            Ben <span className="text-primary">Yunus EŞ</span>
          </h1>
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up [animation-delay:0.65s] max-md:justify-center">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="leading-[1.8em] text-base text-white/80 mb-5 animate-fade-in-up [animation-delay:0.7s] max-md:text-[15px] max-md:leading-[1.7em] max-[425px]:text-[13px] max-[425px]:leading-[1.6em]">
            25 yılı aşkın süredir yazılım dünyasının içerisindeyim. Bu süre
            boyunca 100'ün üzerinde irili ufaklı projede, kimi zaman tek başıma,
            kimi zaman da bir ekibin parçası olarak görev aldım. Kariyerimin ilk
            yıllarında uzun süre ActionScript / Flash teknolojileriyle çalıştım.
            2016 yılından bu yana ise React, Node.js ve MongoDB gibi modern web
            teknolojileri üzerine çalışıyorum.
          </p>
          <p className="leading-[1.8em] text-base text-white/80 mb-0 animate-fade-in-up [animation-delay:0.7s] max-md:text-[15px] max-md:leading-[1.7em] max-[425px]:text-[13px] max-[425px]:leading-[1.6em]">
            2024 yılının son çeyreğinde, edindiğim birikimi müşterilerimize daha
            iyi sunabilmek için{" "}
            <Link
              href="https://codecube.com.tr"
              target="_blank"
              className="text-primary hover:underline"
            >
              CodeCube Software
            </Link>
            'i kurdum.
          </p>
          <div className="mt-8 animate-fade-in-up [animation-delay:0.9s]">
            <SocialArea
              data={{
                next_sosyal: "https://sosyal.teknofest.app/@codesignist",
                youtube: "https://www.youtube.com/yunuses",
                github: "https://github.com/codesignist",
                linkedin: "https://www.linkedin.com/in/codesignist/",
                twitter: "https://twitter.com/codesignist",
                instagram: "https://www.instagram.com/codesignist",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
