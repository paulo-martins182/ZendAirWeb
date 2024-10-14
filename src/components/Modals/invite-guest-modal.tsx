import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../Button";

interface InviteGuestModalProps {
  handleGuestModal: (open: boolean) => void;
  emailsToInvite: string[];
  handleAddEmailToInvite: (e: FormEvent<HTMLFormElement>) => void;
  handleRemoveEmailFromInvate: (email: string) => void;
}

export function InviteGuestModal({
  handleGuestModal,
  emailsToInvite,
  handleAddEmailToInvite,
  handleRemoveEmailFromInvate,
}: InviteGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button>
              <X
                className="size-5 text-zinc-300"
                onClick={() => handleGuestModal(false)}
              />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
              <span className="text-zinc-300">{email}</span>
              <button type="button">
                <X
                  className="size-4 text-zinc-300"
                  onClick={() => handleRemoveEmailFromInvate(email)}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <div className="w-full  bg-zinc-800">
          <form
            className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
            onSubmit={handleAddEmailToInvite}
          >
            <div className="px-2 flex items-center gap-2 flex-1">
              <AtSign className="text-zinc-400 size-5" />
              <input
                type="text"
                name="email"
                placeholder="Digite o e-mail do seu convidado"
                className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              />
            </div>

            <Button>
              Convidar
              <Plus className="size-5 text-sky-950" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
