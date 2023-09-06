export interface SearchInputBtnProps {
  selectedDataOption: string;
  selectedWordOption: string;
}

export interface SelectBoxProps {
  setSelectedDataOption: (option: string) => void;
  setSelectedWordOption: (option: string) => void;
}
