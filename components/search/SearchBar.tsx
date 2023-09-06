import React, { useState } from 'react';
import SelectBox from '../search/SelectBox';
import SearchInputBtn from '../search/SearchInputBtn';
import { NextPage } from 'next';
import styles from '@/styles/searchBar.module.css';

const SearchBar: NextPage = () => {
  const [selectedDataOption, setSelectedDataOption] = useState('전체');
  const [selectedWordOption, setSelectedWordOption] = useState('포함');

  const handleDataOptionChange = (option: string) => {
    setSelectedDataOption(option);
  };

  const handleWordOptionChange = (option: string) => {
    setSelectedWordOption(option);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>검색</p>
      <div className={styles.subContainer}>
        <SelectBox setSelectedDataOption={handleDataOptionChange} setSelectedWordOption={handleWordOptionChange} />
        <SearchInputBtn selectedDataOption={selectedDataOption} selectedWordOption={selectedWordOption} />
      </div>
    </div>
  );
};

export default SearchBar;
