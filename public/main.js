
const main = () => {
  const DELAY = 600;
  const TIME = 10;

  const bgElement = b.createDefaultBackground();
  const inputElement = b.createDefaultInput(bgElement);
  const textElement = b.createDefaultText(bgElement);

  const getInput = (evt, intervalId) => {
    const text = clever.talk(evt.target.value);
    b.setTextTo(textElement, text);
  };

  const debounceTimeout = (fn, delay) => {
    let timeoutId;
    return (evt) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(evt);
      }, delay);
    };
  };

  const debouncedCheckPassword = debounceTimeout(getInput, DELAY);
  inputElement.addEventListener('keyup', debouncedCheckPassword);
};

main();
