import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConstraintedBox from "@/components/layout/constrainted-vew";
import ResponsiveBox from "@/components/layout/responsive-view";
import GridBox from "@/components/layout/grid-view";
import Column from "@/components/layout/column";
import Row from "@/components/layout/row";
import ResumeButton from "./components/resume-button";
import socialLinks from "@/data/social-links";
import ImageEffect from "../common/image-effect";

const About = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-gradient-to-t from-[var(--dialogColor)] from-10% to-[var(--dialogColor80)] to-90% min-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      {/* <ShootingStarEffect /> */}

      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="justify-items-stretch !gap-16 lg:!gap-8">
          <Column classNames="justify-center order-last lg:order-first  max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Column classNames="max-w-full">
              <p className="text-sm drop_in">Hi 👋 my name is</p>

              <p className="text-3xl/normal md:text-4xl/normal font-bold text-[var(--textColor)] drop_in">
                May Myat Mon
              </p>

              <p className="text-lg/6 font-medium text-[var(--textColorLight)] drop_in">
                I build things for the web.
              </p>

              <p className="text-base/normal mt-8 drop_in">
                <Balancer>
                  Welcome to my portfolio! I am a passionate full-stack
                  developer with 7+ years of experience. I am software enginner
                  based in Yangon, Myanmar specializing in building exceptional
                  websites, applications and everything in between.
                </Balancer>
              </p>

              <Column classNames="gap-4 mt-8 lg:mt-16 lg:flex-row">
                <ResumeButton />
              </Column>
            </Column>

            <Column classNames="mt-8 lg:mt-16 drop_out">
              <Row classNames="mt-2 gap-2">
                {socialLinks.slice(0, 5).map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="  !p-1 "
                      aria-label={`${link.name}`}
                    >
                      <span className="text-xl text-[var(--whiteColor)]">
                        <FontAwesomeIcon icon={link.icon} />
                      </span>
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <Row classNames="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] justify-self-center sm:justify-self-end items-center justify-center rounded-full bg-transparent border-2 border-[var(--primaryColor40)] aspect-sqaure overflow-hidden my-auto drop_out">
            <Row classNames="w-full h-auto items-center justify-center rounded-full border-[0.8rem] border-[var(--primaryColor10)] aspect-sqaure overflow-hidden ">
              <ImageEffect src="/images/photo.jpeg" alt="profile" />
            </Row>
          </Row>
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default About;
