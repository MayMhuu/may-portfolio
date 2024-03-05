import ConstraintedView from "@/components/layout/constrainted-vew";
import ResponsiveView from "@/components/layout/responsive-view";
import GridView from "@/components/layout/grid-view";
import SectionTitle from "@/components/common/section-title";
import ServiceItem from "./components/service-item";
import services from "@/data/services";

const Services = ({ id }: { id: string }) => {
  return (
    <ResponsiveView
      classNames="min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedView classNames="p-4 py-16">
        <SectionTitle>My Services</SectionTitle>

        <GridView classNames="justify-items-center sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {services.map((service, index) => {
            return <ServiceItem key={`service-${index}`} data={service} />;
          })}
        </GridView>
      </ConstraintedView>
    </ResponsiveView>
  );
};

export default Services;
