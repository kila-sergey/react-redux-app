import React, { useState } from 'react';
import styles from './style.module.scss'
import classnames from 'classnames';

const Search = ({ onChange, value }) => {

  const [isFocused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  }

  const onBlur = () => {
    setFocused(false);
  }

  return (
    <div className={styles.searchWrap}>
      <input
        type="text"
        className={classnames(styles.search, { [styles.isfocused]: isFocused })}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e)} />
    </div>
  )
}


export default Search;
