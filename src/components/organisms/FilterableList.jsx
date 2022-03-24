import { memo, useState } from 'react';
import Input from '../atoms/Input';
import List from '../molecules/List';

const dota2Logo = require('../../../assets/dota2-logo.jpg');
const csgoLogo = require('../../../assets/csgo-logo.jpg');
const lolLogo = require('../../../assets/lol-logo.jpg');

const gamesList = [
  {
    name: 'Dota 2',
    genre: 'MOBA',
    id: 0,
    logo_url: dota2Logo,
  },
  {
    name: 'Counter-Strike: Global Offensive',
    genre: 'FPS',
    id: 1,
    logo_url: csgoLogo,
  },
  {
    name: 'League of Legends',
    genre: 'MOBA',
    id: 2,
    logo_url: lolLogo,
  },
];

const FilterableList = () => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <Input setText={setFilter} placeholder="busque por nome ou gênero..." />
      <List list={gamesList} textFilter={filter.trim()} />
    </>
  );
};

export default memo(FilterableList);
