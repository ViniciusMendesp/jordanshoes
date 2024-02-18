import Image from "next/image";
import { JordansProps } from "./jordansConfig";

type CardProps = {
  jordans: JordansProps;
};

export const Card = ({ jordans }: CardProps) => {
  return (
    <div className="flex flex-col w-full md gap-6">
      <div className="h-52 w-full flex items-center justify-center px-12 py-8 bg-dark-20 rounded-md">
        <Image
          src={jordans.imagem}
          alt={jordans.nome}
          width={225}
          height={135}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-lg md:text-lg ">{jordans.nome}</h2>
          <span className="text-base text-brand">{jordans.linha}</span>
        </div>

        <span className="font-medium text-xl uppercase font-sans">
          R$ {jordans.valor}
        </span>
      </div>
    </div>
  );
};
