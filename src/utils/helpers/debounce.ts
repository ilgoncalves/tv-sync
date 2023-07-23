export const debounce = (func: any) => {
  let timer: NodeJS.Timeout;
  return function () {
    // @ts-ignore
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(self, args), 600);
  };
};
