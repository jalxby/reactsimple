import { useEffect, useState } from "react";

export default {
  title: "Clock demo",
};

export const OnUseEffectClockExample = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const formatTime = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const clock = formatTime.format(date);

  return <>{clock}</>;
};
