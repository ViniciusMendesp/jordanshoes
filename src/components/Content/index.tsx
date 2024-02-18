import { Card } from "../Card";
import { jordans } from "../Card/jordansConfig";

type ContentProps = {};

export const Content = ({}: ContentProps) => {
  return (
    <div className="w-full px-8 pb-10 pt-14 xl:px-80 xl:pt-20 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-center text-xl md:text-3xl font-semibold">
          Os melhores em um único lugar
        </h1>
        <p className="text-center text-sm  sm:text-base md:text-2xl">
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jordans.map((jordans, index) => (
          <Card key={index} jordans={jordans} />
        ))}
      </div>
    </div>
  );
};
