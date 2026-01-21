interface BalancePropsType {
  value: number;
}
export function Balance({ value }: BalancePropsType) {
  return (
    <div className="flex p-4">
      <div className="font-bold text-xl pr-2">Your balance : </div>
      <div className="font-semibold text-xl">${value}</div>
    </div>
  );
}
