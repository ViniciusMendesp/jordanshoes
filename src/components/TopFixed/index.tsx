type topFixedProps = {
  text: string;
};

export const TopFixed = ({ text }: topFixedProps) => {
  return (
    <div className="w-full h-10 text-center py-2">
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};
