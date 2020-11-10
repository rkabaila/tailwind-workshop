import React from "react";

const couriers = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    serviceCentre: "ABERDEEN",
    vehicle: "Bike",
    status: "busy",
    circuit: "On circuit",
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    serviceCentre: "ABERDEEN",
    vehicle: "Bike",
    status: "busy",
    circuit: "On circuit",
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Doe",
    serviceCentre: "ABERDEEN",
    vehicle: "Bike",
    status: "busy",
    circuit: "On circuit",
  },
];

const Cell = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <h3
    className={`py-2 px-5 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 ${
      className ?? ""
    }`}
  >
    {children}
  </h3>
);

const headerCell =
  "py-2 px-5 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 font-bold";

export const App = () => {
  return (
    <div className="flex flex-col items-stretch mx-8">
      <h1 className="mx-auto">Couriers page</h1>
      <h2 className="mx-auto mb-4">Couriers list</h2>
      <div className="list-header">
        <div className={headerCell}>Id</div>
        <div className={headerCell}>First Name</div>
        <div className={headerCell}>Last Name</div>
        <div className={`${headerCell} hidden sm:block`}>Service centre</div>
        <div className={`${headerCell} hidden md:block`}>Vehicle</div>
        <div className={`${headerCell} hidden lg:block`}>Status</div>
        <div className={`${headerCell} hidden xl:block`}>Circuit</div>
      </div>
      {couriers.map((courier) => {
        const {
          id,
          firstName,
          lastName,
          serviceCentre,
          vehicle,
          status,
          circuit,
        } = courier;
        return (
          <div className="flex flex-row">
            <Cell>{id}</Cell>
            <Cell>{firstName}</Cell>
            <Cell>{lastName}</Cell>
            <Cell className="hidden sm:block">{serviceCentre}</Cell>
            <Cell className="hidden md:block">{vehicle}</Cell>
            <Cell className="hidden lg:block">{status}</Cell>
            <Cell className="hidden xl:block">{circuit}</Cell>
          </div>
        );
      })}
      <button className="bg-silver my-4">Load More</button>
    </div>
  );
};
