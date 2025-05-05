// app/(admin)/Logged.tsx
import { prisma } from "@/lib/prisma";
import React from "react";
import Link from "next/link";

type Props = {
  searchParams: {
    page?: string;
  };
};

const PAGE_SIZE = 10;

const Logged = async ({ searchParams }: Props) => {
  const currentPage = Number(searchParams.page) || 1;
  const skip = (currentPage - 1) * PAGE_SIZE;

  const [visits, totalCount] = await Promise.all([
    prisma.visit.findMany({
      orderBy: { visitedAt: "desc" },
      skip,
      take: PAGE_SIZE,
    }),
    prisma.visit.count(),
  ]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">IP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">OS</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">User Agent</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">Visited At</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {visits.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{user.ip}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{user.os}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100 break-all">{user.userAgent}</td>
                <td className="px-4 py-2 text-sm text-gray-800 dark:text-gray-100">{new Date(user.visitedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-700 dark:text-gray-200">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div className="space-x-2">
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300">
              Previous
            </Link>
          )}
          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300">
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logged;
