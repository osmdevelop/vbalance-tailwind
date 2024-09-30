import { clsx } from 'clsx';
import vbalance from "../assets/images/bg_vb/bgbalance1.png"; // Import the image

export function VBalanceBackground({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-cover bg-center', // Ensures the image covers the div and is centered
        'relative w-full h-full' // Full width and height, adjust as needed
      )}
      style={{
        backgroundImage: `url(${vbalance})`, // Use the imported image as the background
      }}
    />
  );
}
