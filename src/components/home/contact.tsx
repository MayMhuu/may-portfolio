import ConstraintedView from "@/components/layout/constrainted-vew";
import ResponsiveView from "@/components/layout/responsive-view";
import GridView from "@/components/layout/grid-view";
import Column from "@/components/layout/column";
import SectionTitle from "@/components/common/section-title";
import SocialButton from "./components/social-button";
import EffectText from "./components/effect-text";
import socialLinks from "@/data/social-links";

const Contact = ({ id }: { id: string }) => {
  return (
    <ResponsiveView
      classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedView classNames="p-4 py-10">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-16 w-full">
          <GridView classNames="sm:grid-cols-2 w-full mx-auto gap-2">
            {socialLinks.map((link, index) => {
              return (
                <SocialButton
                  key={`social-link-${index}`}
                  text={link.text}
                  icon={link.icon}
                  url={link.url}
                />
              );
            })}
          </GridView>
          <div className="mt-16">
            <p className="text-md text-[var(--textColorLight90)]">
              Loosely developed in{" "}
              <EffectText
                text="TypeScript"
                url="https://www.typescriptlang.org/"
              />{" "}
              and coded in{" "}
              <EffectText
                text="Visual Studio Code"
                url="https://code.visualstudio.com/"
              />{" "}
              by yours truly. Built with{" "}
              <EffectText text="Next.js" url="https://nextjs.org/" /> and{" "}
              <EffectText text="Tailwind CSS" url="https://tailwindcss.com/" />{" "}
              , deployed with{" "}
              <EffectText text="Vercel" url="https://vercel.com/dashboard" />.
            </p>

            <p className="text-center mx-auto mt-2 text-lg font-semibold">
              I&apos;m{" "}
              <span className="text-[var(--primaryColor)]">available</span> for
              freelancing.
            </p>
          </div>
        </Column>
      </ConstraintedView>
    </ResponsiveView>
  );
};

export default Contact;
