import TicketInfo from "@/app/event/TicketInfo";

const PurchaseDetails = () => {
  return (
    <div className="flex flex-col gap-y-4 text-white w-1/2">
      <div className="text-md font-semibold">Purchase Details</div>
      <TicketInfo />
      <hr className="border-dashed" />
      <div className="text-md font-semibold">Order Summary</div>
      <div className="flex flex-row justify-between text-sm">
        Ticket Type<span>2 x VIP Ticket</span>
      </div>
      <hr className="border-dashed" />
      <div className="flex flex-row justify-between text-sm">
        Ticket Price<span>2 x Rp 220,000</span>
      </div>
      <div className="flex flex-row justify-between text-sm">
        Service Charge<span>Rp 3,000</span>
      </div>
      <div className="flex flex-row justify-between text-sm">
        Admin Fee<span>Rp 3,000</span>
      </div>
      <hr className="border-dashed" />
      <div className="flex flex-row justify-between text-sm font-semibold">
        Total<span>Rp 226,000</span>
      </div>
    </div>
  );
};

export default PurchaseDetails;
