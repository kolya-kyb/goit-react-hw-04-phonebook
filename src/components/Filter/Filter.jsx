import PropTypes from 'prop-types';

import { FilterWrapper } from './Filter.styled';
const Filter = ({ handleChange, filter }) => {
  return (
    <FilterWrapper>
      <label>Find contacts by name</label>
      <input
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Find contacts by name"
      />
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
