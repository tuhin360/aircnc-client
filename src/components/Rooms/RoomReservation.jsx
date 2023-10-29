import Button from "../Button/Button";
import Calender from "../Rooms/Calender";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row gap-1 p-4">
        <div className="text-2xl font-semibold">$ 200</div>
        <div className="font-light text-neutral-600"></div>
      </div>
      <hr />
      <Calender></Calender>
      <hr />
      <div className="p-4">
        <Button label='Reserve'></Button>
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
