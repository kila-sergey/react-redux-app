import React from 'react';
import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import {USERS_PAGE_PATH} from '../../constants/router-constants';

const PostsListItem = ({ title, body, searchValue, userId }) => {

  const renderTitle = (searchValue) => {

    const titleValue = title.toLowerCase();
    const index = titleValue.indexOf(searchValue.toLowerCase());

    const firstTitlePart = titleValue.split('').slice(0, index).join('');
    const highlightedPart = titleValue.split('').slice(index, index + searchValue.length).join('');
    const secondTitlePart = titleValue.split('').slice(index + searchValue.length).join('');

    return (
      <>
        <span>{firstTitlePart}</span>
        <span className={styles.highlighted}>{highlightedPart}</span>
        <span>{secondTitlePart}</span>
      </>
    )
    
  }

  return (
    <li className={styles.post}>
      <div className={styles.postRow}>
        <Link to={`${USERS_PAGE_PATH}/${userId}`}>
          <img className={styles.postIcon} src={`images/avatar-${userId}.png`} alt='post' />
        </Link>
        <h3 className={styles.postTitle}>{renderTitle(searchValue)}</h3>
      </div>
      <p className={styles.postBody}>{body}</p>
    </li>
  )
}

export default PostsListItem;
