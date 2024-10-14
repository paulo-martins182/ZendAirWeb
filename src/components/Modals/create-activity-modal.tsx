import { Clock, Tag, X } from "lucide-react";
import { Button } from "../Button";

interface CreateActivityModalProps {
  handleModalCreateActivity: (open: boolean) => void;
}

export function CreateActivityModal({
  handleModalCreateActivity,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button>
              <X
                className="size-5 text-zinc-300"
                onClick={() => handleModalCreateActivity(false)}
              />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <div className="w-full  ">
          <form className="p-2.5 rounded-lg  flex flex-col gap-4">
            <div className="w-full p-4 flex items-center gap-2 flex-1 bg-zinc-950 rounded-md border border-zinc-800">
              <Tag className="text-zinc-400 size-5" />
              <input
                type="text"
                name="activity"
                placeholder="Qual a atividade?"
                className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
              />
            </div>

            <div className="flex items-center gap-2 ">
              <div className="p-4 flex items-center gap-2 flex-1 bg-zinc-950 rounded-md border border-zinc-800">
                <Clock className="text-zinc-400 size-5" />
                <input
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Data e horario da atividade"
                  className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none [color-scheme:dark]"
                />
              </div>
            </div>

            <Button size="full">Salvar atividade</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
