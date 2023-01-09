import React from 'react';

const useDate = () => {
  function isSameDay(d: number) {
    const now = new Date().toString().slice(0, 15);
    const date = new Date(d).toString().slice(0, 15);

    if (now === date) return true;
    else return false;
  }

  function isNextDay(d: number) {
    const now = Date.now();
    const tomorrow = new Date(now + 8.64e7).toString().slice(0, 15);
    const date = new Date(d).toString().slice(0, 15);

    if (tomorrow === date) return true;
    else return false;
  }

  function isOutdated(date: number) {
    const now = Date.now();

    if (date - now < 0) return true;
    else return false;
  }

  return { isNextDay, isSameDay, isOutdated };
};

export default useDate;
