export type TPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: TPaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalNumbersToShow = 1; // Number of pages to show around the current page

    // Add first page and ellipsis if needed
    if (currentPage > totalNumbersToShow + 1) {
      pageNumbers.push(1);
      if (currentPage > totalNumbersToShow + 2) {
        pageNumbers.push('...');
      }
    }

    // Add the surrounding page numbers
    for (
      let i = Math.max(1, currentPage - totalNumbersToShow);
      i <= Math.min(totalPages, currentPage + totalNumbersToShow);
      i++
    ) {
      pageNumbers.push(i);
    }

    // Add last page and ellipsis if needed
    if (currentPage < totalPages - totalNumbersToShow) {
      if (currentPage < totalPages - totalNumbersToShow - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-6">
      <nav>
        <ul className="flex gap-2 flex-wrap">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-white rounded-md bg-primary disabled:bg-gray-300"
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {renderPageNumbers().map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <span className="px-4 py-2 text-sm">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(Number(page))}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-primary'
                  }`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-white rounded-md bg-primary disabled:bg-gray-300"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
