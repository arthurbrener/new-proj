import { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Avatar, ListItem } from 'react-native-elements';

const List = ({ list, textFilter, sortBy, order }) =>
  list
    .filter((l) => {
      if (!textFilter.length) return list;
      const reg = new RegExp(textFilter, 'i');
      return l.name.search(reg) >= 0 || l.genre.search(reg) >= 0;
    })
    .sort((a, b) => {
      if (!sortBy) return 0;
      if (order === 'desc') {
        return a[sortBy] > b[sortBy] ? -1 : Number(a[sortBy] < b[sortBy]);
      }
      return a[sortBy] < b[sortBy] ? -1 : Number(a[sortBy] > b[sortBy]);
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
    })
  ).isRequired,
  textFilter: PropTypes.string,
  sortBy: PropTypes.string,
  order: PropTypes.oneOf(['asc', 'desc']),
};

List.defaultProps = {
  textFilter: '',
  sortBy: '',
  order: 'asc',
};

export default memo(List);
