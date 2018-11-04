import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Dots from "material-ui-dots";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { grey } from "@material-ui/core/colors";
import { duration } from "@material-ui/core/styles/transitions";
import withStyles from "@material-ui/core/styles/withStyles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import classNames from "classnames";
import Carousel from "./SwipeableCardView";

const styles = {
  root: {
    "& > *:focus": {
      outline: "none"
    }
  },
  content: {
    width: "60%",
    maxWidth: 700,
    height: "calc(100% - 96px)",
    maxHeight: 600,
    margin: "-16px auto 0",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  },
  arrow: {
    width: 48,
    height: 48,
    position: "absolute",
    top: "calc(100% - 96px) / 2 + 24px"
  },
  arrowLeft: {
    left: -96
  },
  arrowRight: {
    right: -96
  },
  arrowIcon: {
    color: grey[700]
  },
  CardWrapper: {
    overflow: "hidden",
    borderRadius: 14,
    transform: "scale(1.0)",
    background: "transparent",
    height: "100%"
  },
  dots: {
    paddingTop: 36,
    margin: "0 auto"
  },
  footer: {
    marginTop: -72,
    width: "100%",
    position: "relative",
    textAlign: "center"
  },
  slide: {
    width: "100%",
    height: "100%"
  },
  card: {
    height: "100%"
  },
  cardContainer: {
    height: "100%"
  },
  closed: {}
};

class CardSlide extends Component {
  state = {
    index: 0
  };

  handleContentClick = e => {
    e.stopPropogation() || e.preventDefault();
  };

  handleChange = index => {
    this.setState(
      {
        index
      },
      this.onChange(index)
    );
  };

  decreaseIndex() {
    const newIndex = this.state.index - 1;
    this.setState(
      {
        newIndex
      },
      this.onChange(newIndex)
    );
  }

  modulo = (x, y) => {
    return ((x % y) + y) % y;
  };

  onChange(index) {
    if (this.props.onChange) {
      this.props.onChange(this.modulo(index, this.props.children.length));
    }
  }

  render() {
    const {
      autoplay,
      ButtonProps,
      children,
      classes,
      containerStyle,
      hideArrows,
      interval,
      label,
      landscape: landscapeProp,
      mobile,
      ModalProps,
      open,
      onClose,
      onStart
    } = this.props;
    const landscape = mobile && landscapeProp;
    const transitionDuration = {
      enter: duration.enteringScreen,
      exit: duration.leavingScreen
    };
    const hasMultipleChildren = children.length != null;

    const carousel = (
      <Carousel
        autoplay={open && autoplay && hasMultipleChildren}
        className={classes.carousel}
        containerStyle={{ height: "100%", ...containerStyle }}
        index={this.state.slideIndex}
        interval={interval}
        onChangeIndex={this.handleChange}
        slideClassName={classes.slide}
      >
        {React.Children.map(children, c =>
          React.cloneElement(c, {
            mobile,
            landscape
          })
        )}
      </Carousel>
    );

    return (
      <Modal
        className={classNames(classes.root, {
          [classes.rootMobile]: mobile
        })}
        open={open}
        onClose={onClose}
        BackdropProps={
          ModalProps
            ? { transitionDuration, ...ModalProps.BackdropProps }
            : { transitionDuration }
        }
        {...ModalProps}
      >
        <Fade appear in={open} timeout={transitionDuration}>
          <div
            className={classNames(classes.content, {
              [classes.contentMobile]: mobile
            })}
            onClick={this.handleContentClick}
          >
            <Paper
              elevation={mobile ? 0 : 1}
              className={classes.carouselWrapper}
            >
              {carousel}
            </Paper>
            <div
              style={
                landscape
                  ? {
                      minWidth: 300,
                      maxWidth: "calc(50% - 48px)",
                      padding: 24,
                      float: "right"
                    }
                  : null
              }
            >
              <div
                className={classNames(classes.footer, {
                  [classes.footerMobile]: mobile,
                  [classes.footerMobileLandscape]: landscape
                })}
              >
                {label && (
                  <Button variant="raised" onClick={onStart} {...ButtonProps}>
                    {label}
                  </Button>
                )}
                {hasMultipleChildren && (
                  <Dots
                    count={children.length}
                    index={this.modulo(this.state.slideIndex, children.length)}
                    className={classNames(classes.dots, {
                      [classes.dotsMobile]: mobile,
                      [classes.dotsMobileLandscape]: landscape
                    })}
                    onDotClick={this.handleChange}
                  />
                )}
              </div>
            </div>
            {!mobile &&
              !hideArrows &&
              hasMultipleChildren && (
                <div>
                  <Button
                    variant="fab"
                    className={classNames(classes.arrow, classes.arrowLeft)}
                    onClick={() => this.decreaseIndex()}
                  >
                    <ArrowBackIcon className={classes.arrowIcon} />
                  </Button>
                  <Button
                    variant="fab"
                    className={classNames(classes.arrow, classes.arrowRight)}
                    onClick={() => this.increaseIndex()}
                  >
                    <ArrowForwardIcon className={classes.arrowIcon} />
                  </Button>
                </div>
              )}
          </div>
        </Fade>
      </Modal>
    );
  }
}

CardSlide.defaultProps = {
  autoplay: true,
  interval: 3000,
  mobile: false,
  open: false,
  hideArrows: false
};

CardSlide.propTypes = {
  autoplay: PropTypes.bool,
  ButtonProps: PropTypes.object,
  classes: PropTypes.object.isRequired,
  containerStyle: PropTypes.object,
  interval: PropTypes.number,
  label: PropTypes.string,
  landscape: PropTypes.bool,
  ModalProps: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onStart: PropTypes.func,
  open: PropTypes.bool,
  hideArrows: PropTypes.bool
};

export default withStyles(styles)(CardSlide);
