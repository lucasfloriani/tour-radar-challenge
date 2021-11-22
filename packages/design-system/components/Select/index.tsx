import styled from "styled-components";

// * Because the range of icons that we can select is really small, it was created a object with all the possible icons
// * for the select component
const selectIcons = {
  dropdown: `data:image/svg+xml;charset=utf-8,%3Csvg width='10' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.89 1.005a.782.782 0 00-.312-.247c-.13-.06-.28-.091-.43-.091H.851c-.15 0-.299.031-.43.09a.782.782 0 00-.312.248.553.553 0 00-.11.336.56.56 0 00.123.334L4.27 7.013a.796.796 0 00.311.235c.128.056.272.085.419.085.147 0 .29-.03.419-.085a.796.796 0 00.31-.235l4.148-5.338A.56.56 0 0010 1.34a.553.553 0 00-.11-.336z' fill='%23818d99'/%3E%3C/svg%3E`,
  sort: `data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.25.5L.5 5.5H3v8.75h2.5V5.5H8L4.25.5zM13 1.75h-2.5v8.75H8l3.75 5 3.75-5H13V1.75z' fill='%23818d99' stroke='%23818d99' stroke-width='.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`,
};

type SelectIconsOptions = keyof typeof selectIcons;

type SelectProps = {
  children: React.ReactElement<SelectItemProps>[] | React.ReactElement<SelectItemProps>;
  leftIcon?: SelectIconsOptions;
  rightIcon?: SelectIconsOptions;
};

// * For this use case the select component was created with styled components for the bundle size,
// * but if we have more customizations other then the icons, we could refactor it will react-selector
export const Select = styled.select.attrs((props: SelectProps) => ({
  leftIcon: selectIcons[props?.leftIcon ?? "sort"],
  rightIcon: selectIcons[props?.rightIcon ?? "dropdown"],
  children: props.children,
}))`
  appearance: none;
  background-color: ${({ theme }) => theme.palette["grayscale.500"]};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.palette["grayscale.400"]};
  color: ${({ theme }) => theme.palette["grayscale.200"]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.sizes["small"]};
  outline: 0;
  padding: 16px 32px;
  background-image: ${({ leftIcon, rightIcon }) => `url("${leftIcon}"), url("${rightIcon}")`};
  background-position: left 14px center, right 14px center;
  background-size: 12px, 10px;
  background-repeat: no-repeat;
`;

type SelectItemProps = {
  children: string;
  value: string;
};

export const SelectItem = styled.option<SelectItemProps>``;
