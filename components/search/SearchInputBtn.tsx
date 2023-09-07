import { NextPage } from 'next';
import { useState } from 'react';
import { SearchInputBtnProps } from '@/types/searchItems';
import { Button, Input, Space } from 'antd';

const SearchInpuBtn: NextPage<SearchInputBtnProps> = ({ selectedDataOption, selectedWordOption }) => {
  const [isSearch, setIsSearch] = useState<string>('');

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearch(event.target.value);
  };

  const searchButtonHandler = () => {
    if (isSearch.length > 0) {
      // API 요청하여 검색
      console.log('In SearchInputBtn', selectedDataOption, selectedWordOption, isSearch);

      // 검색 후 검색어 초기화
      setIsSearch('');
    } else {
      alert('검색어를 입력하세요');
    }
  };

  return (
    <div>
      <Space.Compact style={{ width: '80%' }}>
        <Input onChange={searchInputHandler} />
        <Button onClick={searchButtonHandler}>검색</Button>
      </Space.Compact>
    </div>
  );
};

export default SearchInpuBtn;
