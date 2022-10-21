import classNames from 'classnames/bind';
import style from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(style);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://ncvanhoa.org.vn/wp-content/uploads/2022/01/hinh-anh-anime-ngau-loi-4.jpg"
                    alt="avatar"
                    className={cx('avatar')}
                />
                <Button primary className={cx('follow-btn')} > Follow </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Quoc Nguyen Vu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>quocnguyenvu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
