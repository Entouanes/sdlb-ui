import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as Timeline } from '../../assets/Icons/timeline.svg';
import { ReactComponent as ArrowDown } from '../../assets/Icons/arrow_down.svg';
import { ReactComponent as CaretDown } from '../../assets/Icons/caret_down.svg';
import { ReactComponent as Times } from '../../assets/Icons/times.svg';
import { ReactComponent as Plus } from '../../assets/Icons/plus.svg';
import { ReactComponent as Minus } from '../../assets/Icons/minus.svg';
import { ReactComponent as Sort } from '../../assets/Icons/sort.svg';
import { ReactComponent as Check } from '../../assets/Icons/check.svg';
import { ReactComponent as Pen } from '../../assets/Icons/pen.svg';
import { ReactComponent as Search } from '../../assets/Icons/search.svg';
import { ReactComponent as Ellipsis } from '../../assets/Icons/ellipsis.svg';
import { ReactComponent as Return } from '../../assets/Icons/return.svg';
import { ReactComponent as Maximize } from '../../assets/Icons/maximize.svg';
import { ReactComponent as Collapse } from '../../assets/Icons/collapse.svg';
import { ReactComponent as Expand } from '../../assets/Icons/expand.svg';
import { ReactComponent as Listing } from '../../assets/Icons/listing.svg';
import { ReactComponent as Enter } from '../../assets/Icons/enter.svg';
import { ReactComponent as QuestionCircled } from '../../assets/Icons/question-circled.svg';
import { ReactComponent as ListItemNotFound } from '../../assets/Icons/list-item-not-found.svg';
import { ReactComponent as ListNotFound } from '../../assets/Icons/list-not-found.svg';
import { ReactComponent as NoDag } from '../../assets/Icons/no-dag.svg';
import { ReactComponent as NoData } from '../../assets/Icons/no-data.svg';
import { ReactComponent as SearchNotFound } from '../../assets/Icons/search-not-found.svg';
import { ReactComponent as Danger } from '../../assets/Icons/danger.svg';
import { ReactComponent as Success } from '../../assets/Icons/success.svg';
import { ReactComponent as Info } from '../../assets/Icons/info.svg';
import { ReactComponent as InfoSmall } from '../../assets/Icons/info-small.svg';
import { ReactComponent as InfoThick } from '../../assets/Icons/info_thick.svg';
import { ReactComponent as Warning } from '../../assets/Icons/warning.svg';
import { ReactComponent as WarningThick } from '../../assets/Icons/warning_thick.svg';
import { ReactComponent as External } from '../../assets/Icons/external.svg';
import { ReactComponent as Copy } from '../../assets/Icons/copy.svg';
import { ReactComponent as Download } from '../../assets/Icons/download.svg';
import { ReactComponent as ToTopArrow } from '../../assets/Icons/to_top_arrow.svg';
import { ReactComponent as ArrowPointTop } from '../../assets/Icons/arrow-point-up.svg';
import { ReactComponent as RowLoader } from '../../assets/Icons/row-loader.svg';
import { ReactComponent as Plugin } from '../../assets/Icons/plugin.svg';
import { ReactComponent as Calendar } from '../../assets/Icons/calendar.svg';
import { ReactComponent as Arrow } from '../../assets/Icons/arrow.svg';
import { ReactComponent as Link } from '../../assets/Icons/link.svg';

const icons = {
  timeline: Timeline,
  arrowDown: ArrowDown,
  caretDown: CaretDown,
  times: Times,
  plus: Plus,
  minus: Minus,
  sort: Sort,
  check: Check,
  pen: Pen,
  search: Search,
  ellipsis: Ellipsis,
  return: Return,
  maximize: Maximize,
  collapse: Collapse,
  expand: Expand,
  listing: Listing,
  enter: Enter,
  questionCircled: QuestionCircled,
  listItemNotFound: ListItemNotFound,
  listNotFound: ListNotFound,
  noDag: NoDag,
  noData: NoData,
  searchNotFound: SearchNotFound,
  danger: Danger,
  success: Success,
  info: Info,
  infoSmall: InfoSmall,
  infoThick: InfoThick,
  warning: Warning,
  warningThick: WarningThick,
  external: External,
  copy: Copy,
  download: Download,
  toTopArrow: ToTopArrow,
  arrowPointTop: ArrowPointTop,
  rowLoader: RowLoader,
  plugin: Plugin,
  calendar: Calendar,
  arrow: Arrow,
  link: Link,
};

export type SupportedIcons = typeof icons;

export type IconKeys = keyof SupportedIcons;

type SupportedSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  hg: number;
};

export type IconSizes = keyof SupportedSizes;

const sizeTable: SupportedSizes = {
  xs: 0.75,
  sm: 1,
  md: 1.5,
  lg: 2,
  hg: 2.5,
};
interface IconProps {
  name: keyof SupportedIcons;
  size?: keyof SupportedSizes;
  customSize?: string;
  rotate?: number;
  className?: string;
  padLeft?: boolean;
  padRight?: boolean;
  spin?: boolean;
  title?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, size = 'sm', rotate, ...rest }) => {
  const IconComponent = icons[name];
  return (
    <Wrapper className={`icon icon-${name}`} {...rest} {...{ size, rotate }}>
      <IconComponent />
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.i<{
  size: keyof SupportedSizes;
  customSize?: string;
  rotate?: number;
  spin?: boolean;
  padLeft?: boolean;
  padRight?: boolean;
  title?: string;
}>`
  vertical-align: text-top;
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
  padding-left: ${(p) => (p.padLeft ? p.theme.spacer.sm : 0)}rem;
  padding-right: ${(p) => (p.padRight ? p.theme.spacer.sm : 0)}rem;

  ${(p) =>
    p.spin
      ? css`
          animation: ${SpinKeyframes} 1.2s linear infinite;
        `
      : null}

  svg {
    height: ${(p) => p.customSize || sizeTable[p.size] + 'rem'};
    transform: ${(p) => (p.rotate ? `rotate(${p.rotate}deg)` : 'none')};
    transition: transform 0.25s;
    width: auto;
  }
  svg path {
    fill: currentColor;
  }
`;

const SpinKeyframes = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

type SortIconProps = Omit<IconProps, 'name'> & { direction: 'up' | 'down'; active?: boolean };

export const SortIcon: React.FC<SortIconProps> = ({ direction, ...rest }) => (
  <StyledSortIcon direction={direction} name="sort" className="icon icon-sort" {...rest} />
);

const StyledSortIcon = styled(Icon)<SortIconProps>`
  color: ${(p) => p.theme.color.icon.light};

  #up {
    color: ${(p) => (p.active && p.direction === 'up' ? p.theme.color.icon.dark : 'currentColor')};
  }

  #down {
    color: ${(p) => (p.active && p.direction === 'down' ? p.theme.color.icon.dark : 'currentColor')};
  }
`;
