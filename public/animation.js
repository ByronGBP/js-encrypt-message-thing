
class Animation {
  alphaZeroToOne (elem) {
    let alpha = 0;
    let intervalId = null;
    const offset = 0.01;
    const time = 10;

    const changeBackground = () => {
      elem.style.background = `rgba(0,0,0,${alpha})`;
      if (alpha > 1) {
        clearInterval(intervalId);
        alpha = 0;
      }
      alpha += offset;
    };

    intervalId = setInterval(changeBackground, time);
  }

  bounceElement (elem, intervalId) {
    const MAX_ROUND = 4;
    let offset = 6;
    let margin = 0;
    let rounds = 0;
    if ((margin > 20 && offset > 0) || (margin < -20 && offset < 0)) {
      offset = -offset;
      rounds++;
    }
    if (rounds > MAX_ROUND) {
      clearInterval(intervalId);
      intervalId = null;
    }
    margin += offset;
    elem.style.marginLeft = margin + 'px';
  }
}

const animation = new Animation();
