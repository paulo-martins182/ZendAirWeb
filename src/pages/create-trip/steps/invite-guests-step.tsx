import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  handleGuestModal: (open: boolean) => void;
  emailsToInvite: string[];
  handleConfirmModal: (open: boolean) => void;
}

export function InviteGuestsStep({
  handleGuestModal,
  emailsToInvite,
  handleConfirmModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1 text-left">
        <UserRoundPlus className="size-5 text-zinc-400" />
        <span
          className="text-zinc-400 text-lg flex-1"
          onClick={() => handleGuestModal(true)}
        >
          {emailsToInvite.length > 0 ? (
            <span className="text-zinc-400 text-lg flex-1">
              {" "}
              {emailsToInvite.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="text-zinc-400 text-lg flex-1">
              Quem estará na viagem?
            </span>
          )}
        </span>
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>

      <button
        className="bg-sky-300 text-sky-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-sky-400"
        onClick={() => handleConfirmModal(true)}
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-sky-950" />
      </button>
    </div>
  );
}
