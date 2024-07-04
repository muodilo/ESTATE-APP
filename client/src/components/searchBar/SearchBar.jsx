import React,{useState} from 'react'

const SearchBar = () => {
  const types = ['buy','rent']
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice:0,
  })

  const suitchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  }
  return (
		<div>
			<div>
				{types.map((type) => (
					<button
						onClick={() => suitchType(type)}
						key={type}
						className={
							query.type === type
								? "px-4 py-3 border  bg-black text-white"
								: "px-4 py-3 border"
						}>
						{type}
					</button>
				))}
			</div>
			<form className='border flex lg:flex-row flex-col justify-between lg:h-[64px] gap-2'>
				<input
					type='text'
					name='location'
					placeholder='City Location'
					className='border-none px-[10px] lg:w-[200px] lg:py-0 py-2'
				/>
				<input
					type='number'
					name='minPrice'
					min={0}
					max={10000000}
					placeholder='Min Price'
					className='border-none px-[10px] lg:w-[200px] lg:py-0 py-2'
				/>
				<input
					type='number'
					name='maxPrice'
					min={0}
					max={10000000}
					placeholder='Max Price'
					className='border-none px-[10px] lg:w-[200px] lg:py-0 py-2'
				/>
				<button className='cursor-pointer bg-[#fece51] px-5 lg:py-0 py-3 flex justify-center items-center'>
					<img src='/search.png' className='h-[24px] w-[24px]' />
				</button>
			</form>
		</div>
	);
}

export default SearchBar
