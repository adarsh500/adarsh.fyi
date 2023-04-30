const useDebounce = (callback: Function, delay = 300) => {
  let timer: string | number | NodeJS.Timeout | undefined = undefined;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default useDebounce;
