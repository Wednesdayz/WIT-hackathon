import React, { useState } from 'react';
import { Input, Select } from 'antd';

const SearchBox = () => {
  const { Search } = Input;
  const { Option } = Select;
  const optionValues = ['Artwork', 'Designer', 'Gallery'];
  const [searchInput, setSearchInput] = useState({ tag: '', type: optionValues[0] });

  //todo: implement search logic here.
  const search = () => {
    //set isSearched to true, jump to corresponding page.
    //in that page, load and displayed fetched daga, then set isSearched to false.
    console.log(searchInput);
  };

  const onChangeTag = (e) => {
    searchInput.tag = e.target.value;
    setSearchInput(searchInput);
  };

  const onSelectType = (value) => {
    searchInput.type = value;
    setSearchInput(searchInput);
  };

  const selectAfter = (
	<Select
		onSelect={onSelectType}
		defaultValue={optionValues[0]}
		className="navbar__search__select"
    >
		{optionValues.map((optionValue) => (
			<Option key={optionValue} value={optionValue}>
				{optionValue}
			</Option>
      ))}
	</Select>
  );
  return (
	<Search
		onChange={onChangeTag}
		onPressEnter={search}
		onSearch={search}
		addonAfter={selectAfter}
		className="navbar__search"
		placeholder="search..."
    />
  );
};

export default SearchBox;