import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/";

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) =>{
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        )
    }

    return ( 
    <div>
        <Tippy
        interactive
        delay={[800,0]}
        placement="bottom"
        offset={[-20,0]}
        render={renderPreview}
        >
                <div className={cx('account-item')}>
                    <img 
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/1afc7a33d1fcfb48904ac3c0d6dc74ab~c5_720x720.jpeg?lk3s=a5d48078&x-expires=1710856800&x-signature=Xji6E67j2mncdE5Eija3s3nB87A%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>phancuong</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Phan Cuong</p>
                    </div>
                </div>
        </Tippy>
    </div>
     );
}

AccountItem.propTypes = {

}

export default AccountItem;