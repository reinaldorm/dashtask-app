import React from 'react';

export interface CheckDate {
  isToday: (finalDate: number) => boolean;
  isTomorrow: (finalDate: number) => boolean;
  isSoon: (finalDate: number) => boolean;
  isOutOfDate: (finalDate: number) => boolean;
}

const useCheckDate = () => {
  const isSameDay = (d: number) => {
    const now = new Date().toString().slice(0, 15);
    const date = new Date(d).toString().slice(0, 15);

    if (now === date) return true;
    else return false;
  };

  const isNextDay = (d: number) => {
    const now = Date.now();
    const tomorrow = new Date(now + 8.64e7).toString().slice(0, 15);
    const date = new Date(d).toString().slice(0, 15);

    if (tomorrow === date) return true;
    else return false;
  };

  const isOutdated = (d: number) => {
    const now = Date.now();

    if (d - now < 0) return true;
    else return false;
  };

  const isToday = (finalDate: number) => {
    if (isSameDay(finalDate) && !isOutdated(finalDate)) {
      return true;
    } else {
      return false;
    }
  };

  const isTomorrow = (finalDate: number) => {
    if (isNextDay(finalDate) && !isOutdated(finalDate)) {
      return true;
    } else {
      return false;
    }
  };

  const isSoon = (finalDate: number) => {
    if (!isSameDay(finalDate) && !isNextDay(finalDate) && !isOutdated(finalDate)) {
      return true;
    } else {
      return false;
    }
  };

  const isOutOfDate = (finalDate: number) => {
    if (isOutdated(finalDate)) {
      return true;
    } else {
      return false;
    }
  };

  const hookReturn: CheckDate = { isToday, isTomorrow, isSoon, isOutOfDate };

  return hookReturn;
};

export default useCheckDate;
