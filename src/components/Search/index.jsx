import React from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input
        value={searchValue || ''}
        onChange={(e) => setSearchValue && setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue && setSearchValue('')}
          className={styles.clearIcon}
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M7 17L16.8995 7.10051"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 7.00001L16.8995 16.8995"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
