import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  ouline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  lefticon = false,
  righticon = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    ouline,
    text,
    disabled,
    rounded,
    small,
    large,
    lefticon,
    righticon,
  });
  return (
    <Comp className={classes} {...props}>
      {lefticon && <span className={cx('icon')}>{lefticon}</span>}
      <span className={cx('title')}>{children}</span>
      {righticon && <span className={cx('icon')}>{righticon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  ouline: PropTypes.bool,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  lefticon: PropTypes.node,
  righticon: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button;
