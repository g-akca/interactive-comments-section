import { useEffect, useState } from "react";

function formatTimeAgo(createdAt) {
  const date = new Date(createdAt);
  const timestamp = date.getTime();

  if (Number.isNaN(timestamp)) {
    return typeof createdAt === "string" && createdAt.length > 0 ? createdAt : "just now";
  }

  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks === 1 ? "" : "s"} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;

  const years = Math.floor(days / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

export default function useTimeAgo(createdAt) {
  const [timeLabel, setTimeLabel] = useState(() => formatTimeAgo(createdAt));

  useEffect(() => {
    setTimeLabel(formatTimeAgo(createdAt));

    const interval = setInterval(() => {
      setTimeLabel(formatTimeAgo(createdAt));
    }, 60000);

    return () => clearInterval(interval);
  }, [createdAt]);

  return timeLabel;
}