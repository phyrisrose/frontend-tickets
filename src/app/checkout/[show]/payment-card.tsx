import { Card } from '@/components';

/**
 * @todo add state
 */
export default function PaymentCard() {
  return (
    <Card className="col-span-2 p-4">
      <h1 className="text-xl font-semibold text-slate-700">Payment</h1>
      <div className="">
        <div className="my-3">
          <input
            type="text"
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring focus:outline-none"
            placeholder="Cardholder name"
            maxLength={22}
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            className="block w-full px-5 py-2 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring focus:outline-none"
            placeholder="Card number"
            maxLength={19}
          />
        </div>
        <div className="my-3 flex flex-col">
          <div className="mb-2">
            <label className="text-slate-700 pl-1">Expiration</label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <select
              name=""
              id=""
              className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring focus:outline-none"
            >
              <option value="" selected disabled>
                MM
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select
              name=""
              id=""
              className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring focus:outline-none"
            >
              <option value="" selected disabled>
                YYYY
              </option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2023">2027</option>
              <option value="2024">2028</option>
              <option value="2025">2029</option>
              <option value="2026">2030</option>
            </select>
            <input
              type="text"
              className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow placeholder-slate-400 text-slate-700 focus:ring focus:outline-none"
              placeholder="Security code"
              maxLength={3}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
