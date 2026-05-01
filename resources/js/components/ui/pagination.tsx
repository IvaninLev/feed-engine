
interface PaginationProps{
    currentPage:number
    lastPage:number
    onPageChange:(page:number) => void
}

export default function Pagination({ currentPage, lastPage, onPageChange,}: PaginationProps) {
    const pages = Array.from({length:lastPage}, (_,i) => i + 1 ).filter(
        (page)=>
        page === 1 ||
            page === lastPage ||
            (page >= currentPage - 1 && page <= currentPage + 1)
    )
    return (
        <div className="mt-8 flex items-center justify-center gap-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded bg-zinc-800 text-white disabled:opacity-50 hover:bg-zinc-700"
            >
                &lt;
            </button>
            {pages.flatMap((page,index):any => {
                const prevPage = pages[index - 1];
                const hasGap = prevPage && page - prevPage > 1;

                return[
                    hasGap ? (
                        <span key={`ellipsis-${prevPage}-${page}`} className="text-zinc-500">
                            ...
                        </span>
                    ): null,
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`h-10 w-10 rounded ${
                            page === currentPage
                                ? 'bg-blue-500 text-white'
                                : 'bg-zinc-800 text-white hover:bg-zinc-700'
                        }`}
                    >
                        {page}
                    </button>,
                ]
            })}


            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="flex h-10 w-10 items-center justify-center rounded bg-zinc-800 text-white disabled:opacity-50 hover:bg-zinc-700"
            >
                &gt;
            </button>
        </div>
    );
}
