import { useState } from "react";

export const AddPayment = ({ isOpen, onClose, onConfirm }) => {
  const [payment, setPayment] = useState("");
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ payment});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-labelledby="add-payment-modal-title"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="add-payment-modal-title"
          className="text-2xl font-semibold mb-4 text-gray-800"
        >
          Add Payment Method
        </h3>
        <div className="mb-4">
          <h1 className="text-sm font-semibold text-slate-900">
            {" "}
            Name : <span>muhammed</span>{" "}
          </h1>
          <p className="text-sm font-semibold text-slate-900">
            Phone number : <span>0987654321</span>
          </p>
          <p className="text-sm font-semibold text-slate-900">
            Payment:{" "}
            <span className="bg-amber-100 px-3 py-0.5  text-xs">1800</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2 w-full justify-center items-center">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium flex-1 text-gray-700 mb-1"
            >
              ADD Payment
            </label>

            <input
              type="number"
              id="payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="add payment"
              required
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
            >
              Add Payment Method
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
