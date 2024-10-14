import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InviteGuestModal } from "../../components/Modals/invite-guest-modal";
import { ConfirmTripModal } from "../../components/Modals/confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModal, setIsConfirmTripModal] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState(["test@suport.com"]);

  const navigate = useNavigate();

  const handleGuestInput = (open: boolean) => {
    setIsGuestInputOpen(open);
  };

  const handleGuestModal = (open: boolean) => {
    setIsGuestModalOpen(open);
  };

  const handleConfirmModal = (open: boolean) => {
    setIsConfirmTripModal(open);
  };

  const handleAddEmailToInvite = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const validateExistingEmail = emailsToInvite.includes(email);
    if (!validateExistingEmail && validateEmail.test(email)) {
      setEmailsToInvite([...emailsToInvite, email]);
      e.currentTarget.reset();
      return;
    }

    toast.error("Email inválido");
  };

  const handleRemoveEmailFromInvate = (email: string) => {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  };

  const createTrip = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/trips/123");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-square bg-center bg-no-repeat">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col gap-10 items-center">
          <img src="/logo.svg" alt="Zend Air" className="w-48" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            handleGuestInput={handleGuestInput}
            isGuestInputOpen={isGuestInputOpen}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              handleGuestModal={handleGuestModal}
              emailsToInvite={emailsToInvite}
              handleConfirmModal={handleConfirmModal}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm ">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos
          <a className="text-zinc-300 underline" href="#">
            {" "}
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestModal
          handleRemoveEmailFromInvate={handleRemoveEmailFromInvate}
          emailsToInvite={emailsToInvite}
          handleAddEmailToInvite={handleAddEmailToInvite}
          handleGuestModal={handleGuestModal}
        />
      )}

      {isConfirmTripModal && (
        <ConfirmTripModal
          createTrip={createTrip}
          handleConfirmModal={handleConfirmModal}
        />
      )}
    </div>
  );
}
