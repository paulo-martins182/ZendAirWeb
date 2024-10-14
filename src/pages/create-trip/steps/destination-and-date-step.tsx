import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/Button";

interface DestinationAndDateStepProps {
  handleGuestInput: (open: boolean) => void;
  isGuestInputOpen: boolean;
}

export function DestinationAndDateStep({
  handleGuestInput,
  isGuestInputOpen,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          disabled={isGuestInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          disabled={isGuestInputOpen}
        />
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestInputOpen ? (
        <Button onClick={() => handleGuestInput(false)} variant="secondary">
          alterar local/data
          <Settings2 className="size-5 text-zinc-300" />
        </Button>
      ) : (
        <Button onClick={() => handleGuestInput(true)}>
          Continuar
          <ArrowRight className="size-5 text-sky-950" />
        </Button>
      )}
    </div>
  );
}
