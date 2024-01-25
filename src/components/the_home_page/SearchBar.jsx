

function SearchBar({placeholder}) {
    return (
        <>
            <div className="flex">
                <input type='text' className='dm-search-input min-w-max min-h-max h-6 m-2 p-2 bg-slate-800 text-slate-400 rounded-md focus:outline-none ' placeholder= {placeholder}/>

            </div>
        </>
    );
}