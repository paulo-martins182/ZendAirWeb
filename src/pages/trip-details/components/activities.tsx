import { CircleCheck, Plus } from "lucide-react";
import { Button } from "../../../components/Button";

interface ActivitiesProps {
  handleModalCreateActivity: (open: boolean) => void;
}

export function Activities({ handleModalCreateActivity }: ActivitiesProps) {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Atividades</h2>
        <Button onClick={() => handleModalCreateActivity(true)}>
          Cadastrar atividade
          <Plus className="size-5 text-sky-950" />
        </Button>
      </div>

      <div className="space-y-8">
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">dia 16</span>
            <span className="text-xs text-zinc-500">Sabado</span>
          </div>

          <p className="text-zinc-300 text-sm">Florianópolis</p>
        </div>
        <div className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">dia 18</span>
            <span className="text-xs text-zinc-500">Domingo</span>
          </div>

          <div className="space-y-2.5">
            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 shadow-shape flex items-center gap-3">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-400 text-sm ml-auto">08:30</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 shadow-shape flex items-center gap-3">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-100">Academia em grupo</span>
              <span className="text-zinc-400 text-sm ml-auto">08:30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
