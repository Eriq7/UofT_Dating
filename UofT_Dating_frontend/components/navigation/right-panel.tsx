import { useRef } from 'react';
import { View } from 'react-native';
import { DefaultText } from '../default-text';
import { getRandomElement } from '../../util/util';
import { PARTNER_URL } from '../../env/env';

type Partner = {
  name: string
  file: string
  link: string
};

const partners: Partner[] = [
  { name: 'SFDating',  file: 'sfdating.jpg',  link: 'https://discord.gg/REbbHqzD9p'},
  { name: 'duo3k',     file: 'duo3k.webp',    link: 'https://discord.gg/duo3k'},
  { name: 'Tiblur',    file: 'tiblur.jpg',    link: 'https://tiblur.com/register' },
  { name: 'gg/redux',  file: 'redux.png',     link: 'https://discord.gg/EA3QYF9apJ' },
  { name: 'NEET_Chat', file: 'neet-chat.png', link: 'https://discord.gg/96JShH3N7Y' },
  { name: 'Affinity',  file: 'affinity.png',  link: 'https://discord.gg/pvQ9EMVVq5' },
];

const DuoliciousRightPanelContent = () => {
  // ✅ 修改：返回 null，隐藏紫色广告
  return null;
};

const SponsoredRightPanelContent = () => {
  // ✅ 修改：返回 null，隐藏赞助商内容
  return null;
};

const RightPanelContent = () => {
  const rand = useRef(Math.random()).current;

  if (rand < 0.2) {
    return <DuoliciousRightPanelContent/>;
  } else {
    return <SponsoredRightPanelContent/>;
  }
};

const RightPanel = () => {
  // ✅ 修改：最外层也返回 null，确保整个右侧面板不占据任何空间
  return null;
};

export {
  RightPanel,
};