import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  handleConfirmModal: (open: boolean) => void;
  createTrip: (e: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  handleConfirmModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button>
              <X
                className="size-5 text-zinc-300"
                onClick={() => handleConfirmModal(false)}
              />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para
            <span className="text-zinc-100 font-semibold">
              {" "}
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024{" "}
            </span>
            preencha seus dados abaixo:
          </p>
        </div>

        <div className="w-full  ">
          <form
            className="p-2.5 rounded-lg  flex flex-col gap-4"
            onSubmit={createTrip}
          >
            <div className="w-full p-4 flex items-center gap-2 flex-1 bg-zinc-950 rounded-md border border-zinc-800">
              <User className="text-zinc-400 size-5" />
              <input
                type="text"
                name="full_name"
                placeholder="Digite seu nome completo"
                className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              />
            </div>

            <div className="w-full p-4 flex items-center gap-2 flex-1 bg-zinc-950 rounded-md border border-zinc-800">
              <Mail className="text-zinc-400 size-5" />
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail pessoal"
                className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              />
            </div>

            <button className="bg-sky-300 text-sky-950 rounded-lg px-5 py-2.5 font-medium flex justify-center items-center gap-2 hover:bg-sky-400">
              Confirmar viagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
