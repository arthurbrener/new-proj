import { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Avatar, ListItem } from 'react-native-elements';

const List = ({ list, textFilter }) =>
  list
    .filter((l) => {
      if (!textFilter.length) return list;
      const reg = new RegExp(textFilter, 'i');
      return l.name.search(reg) >= 0 || l.genre.search(reg) >= 0;
    })
    .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)))
    .map((l) => (
      <ListItem key={l.id} bottomDivider>
        <Avatar source={{ uri: l.logo_url }} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.genre}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ));

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      logo_url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  textFilter: PropTypes.string.isRequired,
};

export default memo(List);
