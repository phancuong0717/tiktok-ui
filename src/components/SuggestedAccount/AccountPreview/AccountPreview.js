import classNames from "classnames/bind";
import styles from "./AccountPreview..module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/1afc7a33d1fcfb48904ac3c0d6dc74ab~c5_720x720.jpeg?lk3s=a5d48078&x-expires=1710856800&x-signature=Xji6E67j2mncdE5Eija3s3nB87A%3D"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>phancuong</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Phan Cuong</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>1M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>1M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
