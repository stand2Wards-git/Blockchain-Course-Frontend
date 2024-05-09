export const TLborder = ({ done = false }) => {
  if (done)
    return (
      <div className="border-[10px] border-light-purple border-b-0 border-r-0 h-full w-full rounded-ss-3xl translate-x-[calc(50%-5px)] translate-y-[calc(50%-5px)] z-5"></div>
    );
  else
    return (
      <div className="border-[10px] border-mid-purple border-b-0 border-r-0 h-full w-full rounded-ss-3xl translate-x-[calc(50%-5px)] translate-y-[calc(50%-5px)] z-5"></div>
    );
};

export const TRborder = ({ done = false }) => {
  if (done)
    return (
      <div className="border-[10px] border-light-purple border-b-0 border-l-0 h-full w-full rounded-se-3xl -translate-x-[calc(50%-5px)] translate-y-[calc(50%-5px)] z-5"></div>
    );
  else
    return (
      <div className="border-[10px] border-mid-purple border-b-0 border-l-0 h-full w-full rounded-se-3xl -translate-x-[calc(50%-5px)] translate-y-[calc(50%-5px)] z-5"></div>
    );
};

export const BLborder = ({ done = false }) => {
  if (done)
    return (
      <div className="border-[10px] border-light-purple border-t-0 border-r-0 h-full w-full rounded-es-3xl translate-x-[calc(50%-5px)] -translate-y-[calc(50%-5px)] z-5"></div>
    );
  else
    return (
      <div className="border-[10px] border-mid-purple border-t-0 border-r-0 h-full w-full rounded-es-3xl translate-x-[calc(50%-5px)] -translate-y-[calc(50%-5px)] z-5"></div>
    );
};

export const BRborder = ({ done = false }) => {
  if (done)
    return (
      <div className="border-[10px] border-light-purple border-t-0 border-l-0 h-full w-full rounded-ee-3xl -translate-x-[calc(50%-5px)] -translate-y-[calc(50%-5px)] z-5"></div>
    );
  else
    return (
      <div className="border-[10px] border-mid-purple border-t-0 border-l-0 h-full w-full rounded-ee-3xl -translate-x-[calc(50%-5px)] -translate-y-[calc(50%-5px)] z-5"></div>
    );
};
