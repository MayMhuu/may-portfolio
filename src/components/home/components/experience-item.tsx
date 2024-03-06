import type { IExperienceItem } from "@/interfaces";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import NewTab from "./new-tab";
import CardView from "@/components/layout/card";
import Row from "@/components/layout/row";
import Column from "@/components/layout/column";

const ExperienceItem = ({ data }: { data: IExperienceItem }) => {
  return (
    <CardView classNames="p-4 items-center text-center bg-[var(--textColor10)] group min-h-80">
      <Column classNames="items-center justify-between w-full h-full gap-12">
        <Column classNames="items-center justify-start">

          <p className="text-lg font-semibold mt-4 ">{data.designation}</p>
         
          <NewTab url={data.link} text={data.company} />
          <div
            className={` mt-2 flex flex-row relative gap-1 items-center justify-center px-2 py-0.5  `}
          >
            <p className="text-xs/6 font-medium uppercase">{data.startDate}</p>
            <span>-</span>
            <p className="text-xs/6 font-medium uppercase">
              {data.isCurrentJob ? "Present" : data.endDate}
            </p>
          </div>
        </Column>

        <p className="text-base/6 font-normal">
          <Balancer>{data.shortDescription}</Balancer>
        </p>

        {data.keySkills.length > 0 ? (
          <Row classNames="gap-2 mt-2 flex-wrap justify-center items-center">
            {data.keySkills.map((skill, index) => {
              return (
                <Column
                  key={`skill-item-${index}`}
                  classNames="items-center  text-[var(--primaryColor)]"
                >
                  <div
                    className={`flex flex-row relative items-center justify-center px-4 py-0.5 bg-[var(--primaryColor10)]  border border-[var(--primaryColor10)] text-[var(--primaryColor)]
                       rounded-xl`}
                  >
                    <p className="text-sm ">{skill}</p>
                  </div>

                </Column>
              );
            })}
          </Row>
        ) : null}
      </Column>
    </CardView>
  );
};

export default ExperienceItem;
