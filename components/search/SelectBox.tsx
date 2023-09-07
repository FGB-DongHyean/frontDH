import { NextPage } from 'next';
import { SelectBoxProps } from '@/types/searchItems';
import { Select } from 'antd';

const SelectBox: NextPage<SelectBoxProps> = ({ setSelectedDataOption, setSelectedWordOption }) => {
  const { Option } = Select;

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

  const handleDataOptionChange = (option: string) => {
    setSelectedDataOption(option);
  };

  const handleWordOptionChange = (option: string) => {
    setSelectedWordOption(option);
  };

  return (
    <div>
      <Select defaultValue="전체" onChange={handleDataOptionChange}>
        {DATA_OPTIONS.map((item) => (
          <Option key={item.label} value={item.label}>
            {item.label}
          </Option>
        ))}
      </Select>
      <Select defaultValue="포함" onChange={handleWordOptionChange}>
        {WORD_OPTIONS.map((item) => (
          <Option key={item.label} value={item.label}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectBox;
