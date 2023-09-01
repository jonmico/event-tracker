import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faCaretDown,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import styles from './DropdownIcon.module.css';

export default function DropdownIcon({ isDroppedDown }) {
  return (
    <div className={styles.dropDownIcon}>
      {!isDroppedDown ? (
        <FontAwesomeIcon icon={faCaretRight} />
      ) : (
        <FontAwesomeIcon icon={faCaretDown} />
      )}
    </div>
  );
}
