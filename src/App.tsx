import React, { useState, useEffect } from "react";

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
  <p
    className={`py-2 px-5 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 ${
      className ?? ""
    }`}
  >
    {children}
  </p>
);

const headerCell =
  "py-2 px-5 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 font-bold";

export const App = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    if (showSpinner) {
      setTimeout(() => setShowSpinner(false), 2000);
    }
  }, [showSpinner]);

  return (
    <>
      <div className="bg-silver h-10 flex items-center">
        <div className="px-2">
          <h3>Tailwind css workshop</h3>
        </div>
      </div>
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
        {showSpinner && (
          <div className="flex justify-center py-2">
            <div className="spinner spinner-big" />
          </div>
        )}
        <button className="btn btn-blue" onClick={() => setShowSpinner(true)}>
          Load More
        </button>
      </div>
    </>
  );
};
