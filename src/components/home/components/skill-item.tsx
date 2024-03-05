import type { ISkillListItem } from "@/interfaces";
import Image from "next/image";
import CardView from "@/components/layout/card";
import Row from "@/components/layout/row";
import Column from "@/components/layout/column";

const SkillItem = ({ data }: { data: ISkillListItem }) => {
  return (
    <CardView classNames="p-4 items-center justify-start bg-[var(--textColor10)] w-full group">
      <p className="text-lg/6 font-semibold text-center">{data.title}</p>

      {data.items.length > 0 ? (
        <Row classNames="gap-4 mt-8 flex-wrap justify-center items-center">
          {data.items.map((skill, index) => {
            return (
              <Column
                key={`skill-item-${index}`}
                classNames="items-center gap-1 text-[var(--textColor)]"
              >
                {skill.icon ? (
                  <Image
                    src={skill.icon}
                    alt={`logo-${skill.title}`}
                    width={144}
                    height={144}
                    sizes="100%"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/images/logical-thinking.png"
                    className="w-12 lg:w-14 h-auto aspect-square object-cover"
                  />
                ) : null}

                <p className="text-xs/6 font-normal">{skill.title}</p>
              </Column>
            );
          })}
        </Row>
      ) : null}
    </CardView>
  );
};

export default SkillItem;
