import { clsx } from 'clsx';
import Image from 'next/image';

export function Gem({ className, backgroundImage, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        backgroundImage
          ? `bg-cover bg-center bg-no-repeat relative` // Added 'relative' for positioning
          : 'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill // or provide explicit width and height
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          style={{ objectFit: 'cover' }}
        />
      )}
    </div>
  );
}