import { NextPage } from 'next';
import { SelectBoxProps } from '@/types/searchItems';
import styles from '@/styles/searchBar.module.css';

const SelectBox: NextPage<SelectBoxProps> = ({ setSelectedDataOption, setSelectedWordOption }) => {
  const DATA_OPTIONS = [
    { key: 'all', label: '전체' },
    { key: 'id', label: '아이디' },
    { key: 'name', label: '이름' },
    { key: 'email', label: '이메일' },
    { key: 'phoneNum', label: '핸드폰' },
  ];

  const WORD_OPTIONS = [
    { key: 'include', label: '포함' },
    { key: 'same', label: '일치' },
  ];

  const dataOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSelectedDataOption(DATA_OPTIONS.filter((item) => item.key === value)[0].key);
  };

  const wordOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSelectedWordOption(WORD_OPTIONS.filter((item) => item.key === value)[0].key);
  };

  return (
    <div>
      <select className={styles.dataBox} defaultValue="전체" onChange={dataOptionHandler}>
        {DATA_OPTIONS.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
      <select className={styles.wordBox} defaultValue="포함" onChange={wordOptionHandler}>
        {WORD_OPTIONS.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
