interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onNextPage,
    onPreviousPage
}) => {
    return (
        <>
            {/* Pagination controls */}
                <div className="flex justify-center items-center space-x-4 pb-[30px]">
                    <button
                            onClick={onPreviousPage}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                    >
                            Previous
                    </button>
                    <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                            onClick={onNextPage}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
                    >
                            Next
                    </button>
                </div>
        </>
    )
}

export default Pagination;