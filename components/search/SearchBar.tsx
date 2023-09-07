import React, { useState } from 'react';
import SelectBox from '../search/SelectBox';
import SearchInputBtn from '../search/SearchInputBtn';
import { NextPage } from 'next';
import styles from '@/styles/searchBar.module.scss';

const SearchBar: NextPage = () => {
  const [selectedDataOption, setSelectedDataOption] = useState('전체');
  const [selectedWordOption, setSelectedWordOption] = useState('포함');

  return (
    <div className={styles.container}>
      <p className={styles.title}>검색</p>
      <div className={styles.subContainer}>
        <SelectBox setSelectedDataOption={setSelectedDataOption} setSelectedWordOption={setSelectedWordOption} />
        <SearchInputBtn selectedDataOption={selectedDataOption} selectedWordOption={selectedWordOption} />
      </div>
    </div>
  );
};

export default SearchBar;
