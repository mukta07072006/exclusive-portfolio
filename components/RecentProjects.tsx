"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const isExternalLink = (link: string) => /^https?:\/\//.test(link);

const RecentProjects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20"
    >
      <h2 id="projects-heading" className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <article
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt=""
                    aria-hidden="true"
                    width={552}
                    height={330}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={item.img}
                  alt={`${item.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h3>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    href={item.link}
                    target={isExternalLink(item.link) ? "_blank" : undefined}
                    rel={
                      isExternalLink(item.link)
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`${item.cta ?? "Check live site"} — ${item.title}`}
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      {item.cta ?? "Check Live Site"}
                    </p>
                  </Link>

                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
