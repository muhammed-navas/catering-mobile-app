import { FiUsers } from "react-icons/fi";
import { BsCalendar2Event } from "react-icons/bs";
import { Link } from "react-router-dom";

const clients = [
  {
    id: 1,
    name: "Users",
    imageUrl: <FiUsers />,
    path: "/users",
    lastInvoice: {
      Total: "$2,000.00",
      count: "2000",
    },
  },
  {
    id: 2,
    name: "Events",
    imageUrl: <BsCalendar2Event />,
    path: "/all-events",
    lastInvoice: {
      Total: "$14,000.00",
      count: "8",
    },
  },
];



const Home = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {clients.map((client,i) => (
        <Link key={i} to={client.path} >
        <li
          key={client.id}
          
          className="overflow-hidden rounded-xl border cursor-pointer border-gray-400"
        >
          <div className="flex items-center gap-x-4 border-b border-gray-800 bg-gray-50 p-6">
            {client.imageUrl}
            <div className="text-sm/6 font-medium text-gray-900">
              {client.name}
            </div>
          </div>
          <dl className="-my-3 divide-y bg-gray-50 divide-gray-300 px-6 py-4 text-sm/6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Total {client.name} </dt>
              <dd className="flex items-start gap-x-2">
                <div className="rounded-md px-2 py-1 border border-gray-300  text-xs bg-orange-100 font-medium "
                >
                  {client.lastInvoice.count}
                </div>
              </dd>
            </div>
          </dl>
        </li>
        </Link>
      ))}
    </ul>
  );
}
export default Home