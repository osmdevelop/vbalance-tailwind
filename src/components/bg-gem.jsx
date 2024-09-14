import { clsx } from 'clsx';
import vbalance from "../assets/images/bg_vb/bgbalance1.png"; // Import the image

export function Gem({ className, backgroundImage, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        backgroundImage 
          ? 'bg-cover bg-center bg-no-repeat' // Only apply these if there is a backgroundImage
          : 'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]', // Default gradient background
      )}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }} // Apply background image
    />
  );
}
