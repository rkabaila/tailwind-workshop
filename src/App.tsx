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
}) => <h3 className={`py-2 px-5 w-1/7 ${className}`}>{children}</h3>;

const headerCell = "py-2 px-5 w-1/7 font-bold";

export const App = () => {
  return (
    <div className="flex flex-col items-stretch mx-8">
      <h1 className="mx-auto">Couriers page</h1>
      <h2 className="mx-auto mb-4">Couriers list</h2>
      <div className="list-header">
        <div className={headerCell}>Id</div>
        <div className={headerCell}>Firstname</div>
        <div className={headerCell}>Lastname</div>
        <div className={headerCell}>Vehicle</div>
        <div className={headerCell}>Service centre</div>
        <div className={headerCell}>Circuit</div>
        <div className={headerCell}>Status</div>
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
            <Cell>{serviceCentre}</Cell>
            <Cell>{vehicle}</Cell>
            <Cell>{status}</Cell>
            <Cell>{circuit}</Cell>
          </div>
        );
      })}
    </div>
  );
};
