import { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Avatar, ListItem } from 'react-native-elements';

const List = ({ list, textFilter, sorted }) =>
  list
    .filter((l) => {
      if (!textFilter.length) return list;
      const reg = new RegExp(textFilter, 'i');
      return l.name.search(reg) >= 0 || l.genre.search(reg) >= 0;
    })
    .sort((a, b) => {
      if (!sorted) return 0;
      return a.name < b.name ? -1 : Number(a.name > b.name);
    })
    .map((l) => (
      <ListItem key={l.id} bottomDivider>
        <Avatar source={{ uri: l.logoUrl }} />
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
      logoUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  textFilter: PropTypes.string,
  sorted: PropTypes.bool,
};

List.defaultProps = {
  textFilter: '',
  sorted: false,
};

export default memo(List);
