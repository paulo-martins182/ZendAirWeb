import { useState } from "react";
import { CreateActivityModal } from "../../components/Modals/create-activity-modal";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/guests";
import { Activities } from "./components/activities";
import { Header } from "./components/header";

export const TripDetailsPage = () => {
  const [isModalCreateActivityOpen, setIsModalCreateActivityOpen] =
    useState(false);

  const handleModalCreateActivity = (open: boolean) => {
    setIsModalCreateActivityOpen(open);
  };

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <Header />

      <main className="w-full flex gap-16 px-4">
        <Activities handleModalCreateActivity={handleModalCreateActivity} />

        <div className="w-80 space-y-6 ">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {isModalCreateActivityOpen && (
        <CreateActivityModal
          handleModalCreateActivity={handleModalCreateActivity}
        />
      )}
    </div>
  );
};
