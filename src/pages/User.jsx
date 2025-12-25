import React, { useMemo, useState } from "react";
import { users, userRatings } from "../data";

const User = () => {
  const [search, setSearch] = useState("");
  const [ratingLabel, setRatingLabel] = useState("All Ratings");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 9; 

  const filteredUsers = useMemo(() => {
    const selectedRating = userRatings.find(r => r.label === ratingLabel);

    return users.filter(u => {
      const bySearch =
        search.trim() === "" || u.name.toLowerCase().includes(search.toLowerCase());
      const byRating =
        !selectedRating || (u.rating >= selectedRating.min && u.rating <= selectedRating.max);
      return bySearch && byRating;
    });
  }, [search, ratingLabel]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="p-6 bg-white min-h-[15vh] min-w-0">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-black">Users</h1>
        <p className="text-sm text-blue-700">
          Showing {filteredUsers.length} of {users.length}
        </p>
      </div>

      <div className="bg-white border border-blue-500 rounded-xl p-4 flex flex-col md:flex-row gap-4 mb-8">
        <select
          value={ratingLabel}
          onChange={(e) => {
            setRatingLabel(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-white border border-blue-500 rounded-lg px-3 py-2 text-sm text-black"
        >
          {userRatings.map((r) => (
            <option key={r.label} value={r.label}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-0">
        {currentUsers.map((u) => (
          <div
            key={u.id}
            className="bg-blue-50 border border-blue-400 rounded-2xl p-4 flex gap-4"
          >
            <img
              src={u.avatar}
              alt={u.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-black"
            />
            <div className="flex-1">
              <h3 className="text-black font-medium">{u.name}</h3>
              <p className="text-sm text-blue-700">{u.email}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 text-sm">★ {u.rating}</span>
                <span className="text-xs text-black">Orders: {u.totalOrders}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-black text-sm mt-6">No users found.</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
